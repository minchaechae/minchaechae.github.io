import { profile } from '../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-5 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {currentYear}. {profile.name}
        </p>

        <div className="flex items-center gap-5">
          {profile.links.email && (
            <a
              href={`mailto:${profile.links.email}`}
              className="text-slate-400 text-sm hover:text-accent-600 transition-colors duration-200"
            >
              {profile.links.email}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
