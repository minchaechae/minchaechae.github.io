import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

// ── Social icon SVGs ──────────────────────────────────────────
function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ScholarIcon() {
  // Google Scholar mortarboard
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function CVIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

// ── Profile avatar placeholder ───────────────────────────────
function AvatarPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-100 to-accent-200 text-accent-700 text-4xl font-semibold select-none">
      {initials}
    </div>
  )
}

// ── Hero component ────────────────────────────────────────────
export default function Hero() {
  const containerRef = useRef(null)
  const [photoError, setPhotoError] = useState(false)

  // Fade-in on mount
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    requestAnimationFrame(() => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  }, [])

  const { name, role, affiliation, university, bio, photo, links } = profile

  const socialLinks = [
    { href: `mailto:${links.email}`, icon: <EmailIcon />,   label: 'Email',          show: !!links.email },
    { href: links.googleScholar,     icon: <ScholarIcon />, label: 'Google Scholar', show: !!links.googleScholar },
    { href: links.github,            icon: <GitHubIcon />,  label: 'GitHub',         show: !!links.github },
    { href: links.twitter,           icon: <TwitterIcon />, label: 'Twitter / X',    show: !!links.twitter },
    { href: links.linkedin,          icon: <LinkedInIcon />,label: 'LinkedIn',       show: !!links.linkedin },
    { href: links.cv,                icon: <CVIcon />,      label: 'CV',             show: !!links.cv },
  ].filter((l) => l.show)

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="mx-auto max-w-5xl w-full px-6 py-20 md:py-28">
        <div ref={containerRef} className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl shadow-slate-200/60">
              {!photoError ? (
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <AvatarPlaceholder name={name} />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              {name}
            </h1>
            <p className="text-lg text-accent-600 font-medium mb-1">{role}</p>
            <p className="text-slate-500 text-sm mb-6">
              {affiliation} &middot; {university}
            </p>

            {/* Bio paragraphs */}
            <div className="space-y-3 text-slate-600 leading-relaxed text-[0.95rem] max-w-2xl">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="text-slate-400 group-hover:text-accent-500 transition-colors duration-200">
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
