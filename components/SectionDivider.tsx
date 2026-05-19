'use client'

export default function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="w-full bg-ivory px-6 md:px-12 lg:px-16 py-10 md:py-14 border-t-2 border-earth/15 flex items-center justify-between">
      {label && (
        <p className="label-text text-earth/20" style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}>
          {label}
        </p>
      )}
      <span className="block flex-1 h-px bg-earth/8 ml-8" />
    </div>
  )
}
