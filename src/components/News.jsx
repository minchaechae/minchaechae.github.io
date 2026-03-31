import { profile } from '../data/profile'
import { SectionHeading } from './About'
import { useScrollAnimation, useScrollAnimationAll } from '../hooks/useScrollAnimation'

function NewsItem({ date, text }) {
  return (
    <li className="flex gap-4 py-3.5 border-b border-slate-100 last:border-0 animate fade-up">
      <span className="flex-shrink-0 text-xs font-semibold text-accent-600 bg-accent-50 rounded-md px-2 py-1 h-fit mt-0.5 whitespace-nowrap">
        {date}
      </span>
      <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
    </li>
  )
}

export default function News() {
  const headingRef  = useScrollAnimation()
  const newsListRef = useScrollAnimationAll('.animate', { threshold: 0.05 })

  return (
    <section id="news" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headingRef} className="fade-up">
          <SectionHeading>News</SectionHeading>
        </div>
        <ul ref={newsListRef} className="stagger-children max-w-2xl">
          {profile.news.map((item, i) => (
            <NewsItem key={i} date={item.date} text={item.text} />
          ))}
        </ul>
      </div>
    </section>
  )
}
