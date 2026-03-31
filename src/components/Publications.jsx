import { useState } from 'react'
import { profile } from '../data/profile'
import { SectionHeading } from './About'
import { useScrollAnimation, useScrollAnimationAll } from '../hooks/useScrollAnimation'

// ── Link button ───────────────────────────────────────────────
function PaperLink({ href, label, icon }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-medium hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all duration-200 shadow-sm hover:shadow"
    >
      {icon}
      {label}
    </a>
  )
}

// ── Icons ─────────────────────────────────────────────────────
function PaperIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}
function CodeIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}
function ProjectIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

// ── Thumbnail placeholder ─────────────────────────────────────
function ThumbnailPlaceholder({ title }) {
  // Generate a deterministic hue from the title string
  const hue = title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white/60 text-3xl select-none"
      style={{ background: `hsl(${hue}, 55%, 72%)` }}
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
  )
}

// ── Publication card ──────────────────────────────────────────
function PublicationCard({ pub }) {
  const [thumbError, setThumbError] = useState(false)

  return (
    <article
      className="animate fade-up relative flex gap-0 rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-36 md:w-48 self-stretch overflow-hidden">
        {pub.thumbnail && !thumbError ? (
          <img
            src={pub.thumbnail}
            alt={pub.title}
            className="w-full h-full object-contain"
            onError={() => setThumbError(true)}
          />
        ) : (
          <ThumbnailPlaceholder title={pub.title} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 p-5">
        {/* Year badge */}
        <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5 mb-2">
          {pub.year}
        </span>

        <h3 className="font-semibold text-slate-900 text-[0.95rem] leading-snug mb-2">
          {pub.title}
        </h3>

        {/* Authors — **name** renders as bold */}
        <p className="text-sm text-slate-500 mb-1.5">
          {pub.authors.split(/, ?/).map((part, i, arr) => {
            const bold = part.startsWith('**') && part.endsWith('**')
            const name = bold ? part.slice(2, -2) : part
            return (
              <span key={i}>
                {bold
                  ? <strong className="font-semibold text-slate-800">{name}</strong>
                  : name}
                {i < arr.length - 1 && <span className="text-slate-300 mx-1">&middot;</span>}
              </span>
            )
          })}
        </p>

        {/* Venue */}
        <p className="text-sm text-slate-500 italic mb-3">{pub.venue}</p>

        {/* Links */}
        <div className="flex gap-2 flex-wrap">
          <PaperLink href={pub.paper}   label="Paper"   icon={<PaperIcon />} />
          <PaperLink href={pub.poster}  label="Poster"  icon={<PaperIcon />} />
          <PaperLink href={pub.code}    label="Code"    icon={<CodeIcon />} />
          <PaperLink href={pub.project} label="Project" icon={<ProjectIcon />} />
        </div>
      </div>
    </article>
  )
}

// ── Publications section ──────────────────────────────────────
export default function Publications() {
  const headingRef = useScrollAnimation()
  const listRef    = useScrollAnimationAll('.animate')

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headingRef} className="fade-up">
          <SectionHeading>Publications</SectionHeading>
        </div>

        <div ref={listRef} className="space-y-4 stagger-children">
          {profile.publications.map((pub, i) => (
            <PublicationCard key={i} pub={pub} />
          ))}
        </div>

      </div>
    </section>
  )
}
