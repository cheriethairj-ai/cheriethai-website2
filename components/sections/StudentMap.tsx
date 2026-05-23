'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'

// ── Data — fill in real numbers when ready ──────────────────────
const brazilData: Record<string, { count: number | null; label?: string }> = {
  'São Paulo':        { count: null },
  'Rio de Janeiro':   { count: null },
  'Minas Gerais':     { count: null },
  'Bahia':            { count: null },
  'Paraná':           { count: null },
  'Rio Grande do Sul':{ count: null },
  'Santa Catarina':   { count: null },
  'Goiás':            { count: null },
  'Pernambuco':       { count: null },
  'Ceará':            { count: null },
  'Pará':             { count: null },
  'Amazonas':         { count: null },
  'Mato Grosso':      { count: null },
  'Mato Grosso do Sul':{ count: null },
  'Maranhão':         { count: null },
  'Espírito Santo':   { count: null },
  'Rio Grande do Norte':{ count: null },
  'Alagoas':          { count: null },
  'Piauí':            { count: null },
  'Paraíba':          { count: null },
  'Sergipe':          { count: null },
  'Rondônia':         { count: null },
  'Tocantins':        { count: null },
  'Acre':             { count: null },
  'Amapá':            { count: null },
  'Roraima':          { count: null },
  'Distrito Federal': { count: null },
}

const worldData: Record<string, { count: number | null }> = {
  'Thailand':   { count: null },
  'Portugal':   { count: null },
  'United States of America': { count: null },
  'Japan':      { count: null },
  'Germany':    { count: null },
  'France':     { count: null },
  'Argentina':  { count: null },
  'Colombia':   { count: null },
}

// TopoJSON sources (public CDN)
const BRAZIL_GEO = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson'
const WORLD_GEO  = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'

type Tooltip = { name: string; count: number | null; x: number; y: number }

export default function StudentMap() {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)
  const [view, setView] = useState<'brazil' | 'world'>('brazil')

  const handleMove = (geo: any, evt: any) => {
    const name = geo.properties.name || geo.properties.NAME || ''
    const data = view === 'brazil' ? brazilData[name] : worldData[name]
    setTooltip({
      name,
      count: data?.count ?? null,
      x: evt.clientX,
      y: evt.clientY,
    })
  }

  const handleLeave = () => setTooltip(null)

  const getColor = (name: string) => {
    const data = view === 'brazil' ? brazilData[name] : worldData[name]
    if (!data) return 'rgba(61,74,64,0.15)'
    if (data.count === null) return 'rgba(61,74,64,0.25)'
    if (data.count === 0) return 'rgba(61,74,64,0.2)'
    if (data.count < 5) return 'rgba(138,162,120,0.5)'
    if (data.count < 15) return 'rgba(138,162,120,0.75)'
    return 'rgba(138,162,120,1)'
  }

  return (
    <div className="relative w-full">

      {/* Tab toggle */}
      <div className="flex items-center gap-6 mb-8">
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
            }}
          >
            {v === 'brazil' ? 'BRASIL' : 'MUNDO'}
          </button>
        ))}
      </div>

      {/* Coming soon badge */}
      <div className="absolute top-0 right-0 z-10">
        <span
          className="label-text text-sage/50 border border-sage/20 px-3 py-1"
          style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}
        >
          EM BREVE
        </span>
      </div>

      {/* Map */}
      <motion.div
        key={view}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-sm overflow-hidden"
        style={{ background: 'rgba(13,17,14,0.6)', aspectRatio: view === 'brazil' ? '4/3' : '16/7' }}
      >
        <ComposableMap
          projection={view === 'brazil' ? 'geoMercator' : 'geoNaturalEarth1'}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            center={view === 'brazil' ? [-52, -14] : [10, 20]}
            zoom={view === 'brazil' ? 3.2 : 1}
          >
            <Geographies geography={view === 'brazil' ? BRAZIL_GEO : WORLD_GEO}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => {
                  const name = geo.properties.name || geo.properties.NAME || ''
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseMove={(evt: any) => handleMove(geo, evt)}
                      onMouseLeave={handleLeave}
                      style={{
                        default: {
                          fill: getColor(name),
                          stroke: 'rgba(245,240,232,0.06)',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: 'rgba(180,200,160,0.65)',
                          stroke: 'rgba(245,240,232,0.2)',
                          strokeWidth: 0.8,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: 'rgba(138,162,120,0.8)',
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </motion.div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4">
        <span className="label-text text-sand/25" style={{ fontSize: '0.55rem', letterSpacing: '0.18em' }}>
          CONCENTRAÇÃO DE ALUNOS
        </span>
        <div className="flex items-center gap-1">
          {['rgba(61,74,64,0.25)', 'rgba(138,162,120,0.4)', 'rgba(138,162,120,0.65)', 'rgba(138,162,120,1)'].map((c, i) => (
            <div key={i} className="w-4 h-2 rounded-sm" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none"
            style={{ left: tooltip.x + 12, top: tooltip.y - 40 }}
          >
            <div
              className="px-3 py-2"
              style={{
                background: 'rgba(26,31,27,0.95)',
                border: '1px solid rgba(138,162,120,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="label-text text-ivory/80" style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}>
                {tooltip.name}
              </p>
              <p className="label-text text-sage/60 mt-0.5" style={{ fontSize: '0.55rem', letterSpacing: '0.18em' }}>
                {tooltip.count !== null ? `${tooltip.count} alunos` : 'EM BREVE'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
