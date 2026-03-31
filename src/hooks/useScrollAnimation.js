import { useEffect, useRef } from 'react'

/**
 * useScrollAnimation
 *
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class `visible` is
 * added (works with the .fade-up / .fade-in utilities in index.css).
 *
 * @param {object} options  – IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el) // animate once
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * useScrollAnimationAll
 *
 * Observes every element inside the container that matches `selector`.
 * Adds `visible` to each child as it enters the viewport.
 *
 * @param {string} selector  – CSS selector for child elements
 * @param {object} options   – IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollAnimationAll(selector = '.animate', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll(selector)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px', ...options }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
