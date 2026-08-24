'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'
import { students, type Student } from '@/data/students'
import { institutions } from '@/data/institutions'

const BRAZIL_GEO = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson'
const WORLD_GEO  = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'

// ─── Group students by city ────────────────────────────────────────────────────

type CityGroup = {
  city: string
  country: string
  coordinates: [number, number]
  students: Student[]
}

function groupByCity(list: Student[]): CityGroup[] {
  const map: Record<string, CityGroup> = {}
  for (const s of list) {
    if (!map[s.city]) {
      map[s.city] = { city: s.city, country: s.country, coordinates: s.coordinates, students: [] }
    }
    map[s.city].students.push(s)
  }
  return Object.values(map)
}

// Build secondary-location groups filtered by view
function getSecondaryGroups(all: Student[], view: 'brazil' | 'world'): CityGroup[] {
  const map: Record<string, CityGroup> = {}
  for (const s of all) {
    if (!s.coordinates2 || !s.city2 || !s.country2) continue
    const isBrazil2 = s.country2 === 'Brasil' || s.country2 === 'Brazil'
    if (view === 'brazil' && !isBrazil2) continue
    if (view === 'world' && isBrazil2) continue
    if (!map[s.city2]) {
      map[s.city2] = { city: s.city2, country: s.country2, coordinates: s.coordinates2, students: [] }
    }
    map[s.city2].students.push(s)
  }
  return Object.values(map)
}

// ─── Dropdown ──────────────────────────────────────────────────────────────────

type DropdownState = { group: CityGroup; x: number; y: number } | null

// ─── Map ───────────────────────────────────────────────────────────────────────

export default function StudentMap() {
  const router = useRouter()
  const { lang } = useLanguage()
  const [view, setView] = useState<'brazil' | 'world'>('brazil')
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [-52, -14],
    zoom: 3.2,
  })
  const [dropdown, setDropdown] = useState<DropdownState>(null)
  const [search, setSearch] = useState('')

  const brazilStudents = students.filter(s => s.country === 'Brasil' || s.country === 'Brazil')
  const worldStudents  = students.filter(s => s.country !== 'Brasil' && s.country !== 'Brazil')
  const visibleStudents = view === 'brazil' ? brazilStudents : worldStudents
  const cityGroups = groupByCity(visibleStudents)

  // Secondary pins: e.g. Yuri in SP on Brazil map, Anna in Hungary on world map
  const secondaryGroups = getSecondaryGroups(students, view)
  const allGroups = [...cityGroups, ...secondaryGroups]

  // Close dropdown when clicking elsewhere
  useEffect(() => {
    if (!dropdown) return
    const close = () => setDropdown(null)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [dropdown])

  // Reset map position when switching view
  useEffect(() => {
    setDropdown(null)
    setPosition(
      view === 'brazil'
        ? { coordinates: [-52, -14], zoom: 3.2 }
        : { coordinates: [10, 20],  zoom: 1 }
    )
  }, [view])

  const handlePinClick = (group: CityGroup, e: React.MouseEvent) => {
    e.stopPropagation()
    setDropdown({ group, x: e.clientX, y: e.clientY })
  }

  const pinR   = view === 'brazil' ? 2.8 : 1.8
  const zoomIn  = () => setPosition(p => ({ ...p, zoom: Math.min(p.zoom * 1.5, 16) }))
  const zoomOut = () => setPosition(p => ({ ...p, zoom: Math.max(p.zoom / 1.5, view === 'brazil' ? 2 : 0.7) }))

  return (
    <div className="relative w-full">

      {/* ── Controls row ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        {/* Tab toggle */}
        <div className="flex items-center gap-6">
          {(['brazil', 'world'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="label-text transition-colors duration-300"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                color: view === v ? 'rgba(245,240,232,0.85)' : 'rgba(245,240,232,0.25)',
                borderBottom: view === v ? '1px solid rgba(138,162,120,0.5)' : '1px solid transparent',
                paddingBottom: '4px',
                cursor: 'none',
              }}
            >
              {v === 'brazil'
                ? `${lang === 'EN' ? 'BRAZIL' : 'BRASIL'} · ${brazilStudents.length}`
                : `${lang === 'EN' ? 'WORLD' : 'MUNDO'} · ${worldStudents.length}`}
            </button>
          ))}
        </div>

        {/* Zoom buttons */}
        <div className="flex items-center gap-1">
          {[{ label: '+', fn: zoomIn }, { label: '−', fn: zoomOut }].map(({ label, fn }) => (
            <button
              key={label}
              onClick={fn}
              className="label-text text-sand/35 hover:text-sand/75 transition-colors duration-200 flex items-center justify-center border border-sand/10 hover:border-sand/22"
              style={{ width: '28px', height: '28px', fontSize: '1rem', cursor: 'none' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Map ──────────────────────────────────────────────────────────── */}
      <motion.div
        key={view}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-sm overflow-hidden"
        style={{ background: 'rgba(13,17,14,0.6)', height: 'clamp(460px, 62svh, 700px)' }}
        onClick={() => setDropdown(null)}
      >
        <ComposableMap
          projection={view === 'brazil' ? 'geoMercator' : 'geoNaturalEarth1'}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            onMoveEnd={(pos: any) =>
              setPosition({ coordinates: pos.coordinates as [number, number], zoom: pos.zoom })
            }
          >
            {/* Geography */}
            <Geographies geography={view === 'brazil' ? BRAZIL_GEO : WORLD_GEO}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: 'rgba(61,74,64,0.25)', stroke: 'rgba(245,240,232,0.06)', strokeWidth: 0.5, outline: 'none' },
                      hover:   { fill: 'rgba(61,74,64,0.35)', stroke: 'rgba(245,240,232,0.1)',  strokeWidth: 0.5, outline: 'none' },
                      pressed: { fill: 'rgba(61,74,64,0.35)', outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* City pins */}
            {allGroups.map((group) => {
              const isMulti = group.students.length > 1
              return (
                <Marker key={group.city} coordinates={group.coordinates}>
                  {/* Outer ring for multi-student cities */}
                  {isMulti && (
                    <circle
                      r={pinR * 2.4}
                      fill="rgba(220,201,160,0.06)"
                      stroke="rgba(220,201,160,0.18)"
                      strokeWidth={0.5}
                      style={{ pointerEvents: 'none' }}
                    />
                  )}

                  {/* Main dot */}
                  <circle
                    r={pinR}
                    fill={isMulti ? 'rgba(220,201,160,1)' : 'rgba(220,201,160,0.85)'}
                    stroke="rgba(220,201,160,0.35)"
                    strokeWidth={1.6}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handlePinClick(group, e)}
                  />

                  {/* Count badge for multi */}
                  {isMulti && (
                    <text
                      textAnchor="middle"
                      y={-pinR * 2.6}
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: `${pinR * 1.4}px`,
                        fill: 'rgba(220,201,160,0.55)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    >
                      {group.students.length}
                    </text>
                  )}
                </Marker>
              )
            })}
          </ZoomableGroup>
        </ComposableMap>
      </motion.div>

      {/* ── City dropdown ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1.0] }}
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: dropdown.y + 14,
              left: dropdown.x,
              transform: 'translateX(-50%)',
              zIndex: 200,
              background: '#1A1F1B',
              border: '1px solid rgba(220,201,160,0.12)',
              minWidth: '240px',
              maxWidth: '300px',
            }}
          >
            {/* City header */}
            <div className="px-5 py-4 border-b border-sand/8">
              <p className="label-text text-sage/40" style={{ fontSize: '0.47rem', letterSpacing: '0.24em' }}>
                {dropdown.group.city.toUpperCase()}&nbsp;&nbsp;·&nbsp;&nbsp;{dropdown.group.students.length} {lang === 'EN' ? 'GRADUATES' : 'FORMADOS'}
              </p>
            </div>

            {/* Student list */}
            {dropdown.group.students.map((student, i) => (
              <button
                key={student.id}
                onClick={() => { setDropdown(null); router.push(`/instituto/${student.id}`) }}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-sand/[0.04] transition-colors duration-200 text-left group border-b border-sand/5 last:border-b-0"
                style={{ cursor: 'none' }}
              >
                <div>
                  <p
                    className="font-cormorant font-light text-ivory/75 group-hover:text-ivory transition-colors duration-200"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.1 }}
                  >
                    {student.name}
                  </p>
                  {(lang === 'PT' ? student.descriptorsPT : student.descriptors) && (
                    <p className="label-text text-sage/28 mt-1 group-hover:text-sage/45 transition-colors duration-200"
                      style={{ fontSize: '0.44rem', letterSpacing: '0.16em' }}>
                      {(lang === 'PT' && student.descriptorsPT ? student.descriptorsPT : student.descriptors ?? []).join(' · ').toUpperCase()}
                    </p>
                  )}
                </div>
                <span
                  className="text-sand/20 group-hover:text-sand/55 transition-colors duration-200 ml-4 shrink-0"
                  style={{ fontSize: '0.75rem' }}
                >
                  →
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Legend ────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-4 mb-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(220,201,160,0.85)' }} />
          <span className="label-text text-sand/28" style={{ fontSize: '0.52rem', letterSpacing: '0.18em' }}>
            {lang === 'EN' ? 'CLICK PIN TO VIEW PROFILE' : 'CLIQUE NO PIN PARA VER O PERFIL'}
          </span>
        </div>
        <span className="label-text text-sage/18" style={{ fontSize: '0.46rem', letterSpacing: '0.14em' }}>
          {lang === 'EN' ? 'USE + / − OR SCROLL TO ZOOM' : 'USE + / − OU SCROLL PARA ZOOM'}
        </span>
      </div>

      {/* ── Student directory list ─────────────────────────────────────── */}
      <StudentDirectory view={view} search={search} onSearchChange={setSearch} />
    </div>
  )
}

// ─── Student Directory (below map) ────────────────────────────────────────────

function StudentDirectory({
  view,
  search,
  onSearchChange,
}: {
  view: 'brazil' | 'world'
  search: string
  onSearchChange: (v: string) => void
}) {
  const router = useRouter()
  const { lang } = useLanguage()
  const query = search.trim().toLowerCase()

  // When searching: scan all students; otherwise filter by current view tab
  const isSearching = query.length > 0
  const baseStudents = isSearching
    ? students
    : view === 'brazil'
      ? students.filter(s => s.country === 'Brasil' || s.country === 'Brazil')
      : students.filter(s => s.country !== 'Brasil' && s.country !== 'Brazil')

  const filteredStudents = isSearching
    ? baseStudents.filter(s => s.name.toLowerCase().includes(query))
    : baseStudents

  const cityGroups = groupByCity(filteredStudents)

  return (
    <div>
      {/* ── Header row with title + search ── */}
      <div className="flex items-center gap-4 mb-8">
        <p className="label-text text-sage/30 shrink-0" style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}>
          {lang === 'EN' ? 'ALL GRADUATES' : 'TODOS OS FORMADOS'}
        </p>
        <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.06)' }} />

        {/* Search input */}
        <div className="relative shrink-0">
          <input
            type="text"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            placeholder={lang === 'EN' ? 'Search by name…' : 'Buscar por nome…'}
            className="label-text bg-transparent outline-none placeholder-sage/20 text-ivory/60 focus:text-ivory/85 transition-colors duration-200"
            style={{
              fontSize: '0.48rem',
              letterSpacing: '0.18em',
              borderBottom: '1px solid rgba(220,201,160,0.12)',
              paddingBottom: '3px',
              width: '130px',
              cursor: 'text',
            }}
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-0 top-0 text-sand/25 hover:text-sand/60 transition-colors duration-200"
              style={{ fontSize: '0.6rem', cursor: 'none' }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Institutions (only when not searching) ── */}
      {!isSearching && (
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-0">
            <p
              className="label-text text-sage/35 shrink-0"
              style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}
            >
              {lang === 'PT' ? 'FORMAÇÕES INSTITUCIONAIS' : 'INSTITUTIONAL TRAINING'}
            </p>
            <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
          </div>

          {institutions.map((inst) => (
            <button
              key={inst.id}
              onClick={() => router.push(`/${inst.id.replace('shambhala-spa-paraty', 'shambhalaspa')}`)}
              className="group w-full flex items-center justify-between py-5 border-b text-left hover:bg-sand/[0.02] transition-colors duration-200"
              style={{ borderColor: 'rgba(220,201,160,0.07)', cursor: 'none' }}
            >
              <div className="flex items-start gap-6">
                <span
                  className="label-text text-sage/30 group-hover:text-sage/50 transition-colors duration-200 shrink-0 mt-0.5"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}
                >
                  {inst.location.toUpperCase()}
                </span>
                <div>
                  <p
                    className="font-cormorant font-light text-ivory/65 group-hover:text-ivory/90 transition-colors duration-200"
                    style={{ fontSize: 'clamp(1.4rem, 2vw, 1.55rem)', lineHeight: 1.1 }}
                  >
                    {inst.name}
                  </p>
                  <p
                    className="label-text text-sage/30 group-hover:text-sage/50 transition-colors duration-200 mt-1"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.14em' }}
                  >
                    {lang === 'PT' ? inst.trainingTypePT : inst.trainingTypeEN}
                    &nbsp;&nbsp;·&nbsp;&nbsp;
                    {inst.students.length} {lang === 'PT' ? 'TERAPEUTAS' : 'PRACTITIONERS'}
                  </p>
                </div>
              </div>
              <span
                className="text-sand/20 group-hover:text-sand/50 transition-colors duration-200 ml-4 shrink-0"
                style={{ fontSize: '0.75rem' }}
              >
                →
              </span>
            </button>
          ))}

          {/* Divider before certified graduates */}
          <div className="flex items-center gap-4 mt-10 mb-8">
            <p
              className="label-text text-sage/35 shrink-0"
              style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}
            >
              {lang === 'PT' ? 'GRADUADOS CERTIFICADOS' : 'CERTIFIED GRADUATES'}
            </p>
            <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
          </div>
        </div>
      )}

      {/* No results */}
      {isSearching && filteredStudents.length === 0 && (
        <p className="label-text text-sage/25" style={{ fontSize: '0.48rem', letterSpacing: '0.2em' }}>
          {lang === 'EN' ? 'NO RESULTS' : 'SEM RESULTADOS'}
        </p>
      )}

      {/* Grouped by city */}
      {(!isSearching || filteredStudents.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {cityGroups.map((group) => (
            <div key={group.city} className="border-b border-sand/6 pb-6 mb-6 pr-0 sm:pr-8">
              {/* City label */}
              <p
                className="label-text text-sage/30 mb-4"
                style={{ fontSize: '0.62rem', letterSpacing: '0.18em' }}
              >
                {group.city.toUpperCase()}&nbsp;&nbsp;·&nbsp;&nbsp;{group.country.toUpperCase()}
              </p>

              {/* Students in this city */}
              <div className="flex flex-col gap-0">
                {group.students.map((student) => (
                  <button
                    key={student.id}
                    onClick={() => router.push(`/instituto/${student.id}`)}
                    className="group flex items-center justify-between py-3 border-b border-sand/5 last:border-b-0 text-left hover:bg-sand/[0.02] transition-colors duration-200"
                    style={{ cursor: 'none' }}
                  >
                    <div>
                      <p
                        className="font-cormorant font-light text-ivory/65 group-hover:text-ivory/90 transition-colors duration-200"
                        style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.55rem)', lineHeight: 1.1 }}
                      >
                        {student.name}
                      </p>
                      {(lang === 'PT' ? student.descriptorsPT : student.descriptors) && (
                        <p
                          className="label-text text-sand/35 group-hover:text-sand/55 transition-colors duration-200 mt-1"
                          style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}
                        >
                          {(lang === 'PT' && student.descriptorsPT ? student.descriptorsPT : student.descriptors ?? []).join(' · ').toUpperCase()}
                        </p>
                      )}
                    </div>
                    <span
                      className="text-sand/15 group-hover:text-sand/45 transition-colors duration-200 ml-4 shrink-0"
                      style={{ fontSize: '0.7rem' }}
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
