/* ─────────────────────────────────────────────
   main.js  –  Vanilla JS for the Jekyll site
───────────────────────────────────────────── */

// ── Footer year ──────────────────────────────
const yearEl = document.getElementById('footer-year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

// ── Navbar scroll effect ──────────────────────
const header = document.getElementById('site-header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

// ── Active section tracking ───────────────────
const NAV_SECTION_IDS = ['about', 'publications']

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const id = entry.target.id
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      const isActive = btn.dataset.navLink === id
      btn.classList.toggle('text-accent-600', isActive)
      btn.classList.toggle('bg-accent-50',    isActive)
      btn.classList.toggle('text-slate-600',  !isActive)
    })
  })
}, { threshold: 0.35 })

NAV_SECTION_IDS.forEach(id => {
  const el = document.getElementById(id)
  if (el) sectionObserver.observe(el)
})

// ── Smooth scroll helper ──────────────────────
function smoothScrollTo(href) {
  const target = document.querySelector(href)
  if (!target) return
  const offset = 72
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

// ── Nav click handlers ────────────────────────
document.querySelectorAll('[data-scroll-to]').forEach(btn => {
  btn.addEventListener('click', () => {
    smoothScrollTo(btn.dataset.scrollTo)
    closeMobileMenu()
  })
})

// ── Mobile menu ───────────────────────────────
const menuBtn    = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose     = document.getElementById('icon-close')
let menuOpen = false

function openMobileMenu() {
  menuOpen = true
  mobileMenu.classList.remove('max-h-0', 'opacity-0')
  mobileMenu.classList.add('max-h-64', 'opacity-100')
  iconHamburger.classList.add('hidden')
  iconClose.classList.remove('hidden')
}

function closeMobileMenu() {
  menuOpen = false
  mobileMenu.classList.add('max-h-0', 'opacity-0')
  mobileMenu.classList.remove('max-h-64', 'opacity-100')
  iconHamburger.classList.remove('hidden')
  iconClose.classList.add('hidden')
}

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuOpen ? closeMobileMenu() : openMobileMenu()
  })
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && menuOpen) closeMobileMenu()
})

// ── Scroll animations ─────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      fadeObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

// Observe standalone fade-up / fade-in elements (headings etc.)
document.querySelectorAll('.fade-up:not(.animate), .fade-in:not(.animate)').forEach(el => {
  fadeObserver.observe(el)
})

// Staggered list items: observe each .animate child individually
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      staggerObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

document.querySelectorAll('.animate.fade-up').forEach(el => {
  staggerObserver.observe(el)
})

// ── About section entrance animation ──────────
const aboutContainer = document.getElementById('about-container')
if (aboutContainer) {
  requestAnimationFrame(() => {
    aboutContainer.style.opacity = '0'
    aboutContainer.style.transform = 'translateY(16px)'
    requestAnimationFrame(() => {
      aboutContainer.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      aboutContainer.style.opacity = '1'
      aboutContainer.style.transform = 'translateY(0)'
    })
  })
}

// ── Profile photo fallback ────────────────────
const profilePhoto    = document.getElementById('profile-photo')
const profileFallback = document.getElementById('profile-fallback')
if (profilePhoto && profileFallback) {
  // Set initials
  const name = profileFallback.dataset.name || ''
  profileFallback.textContent = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  // Show fallback on error
  profilePhoto.addEventListener('error', () => {
    profilePhoto.classList.add('hidden')
    profileFallback.classList.remove('hidden')
  })
}

// ── Publication thumbnail placeholders ────────
document.querySelectorAll('[data-thumb-container]').forEach(container => {
  const title   = container.dataset.pubTitle || ''
  const hue     = title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
  const fallback = container.querySelector('.thumb-fallback')
  const img      = container.querySelector('[data-thumb]')

  if (fallback) fallback.style.background = `hsl(${hue}, 55%, 72%)`

  if (img) {
    img.addEventListener('error', () => {
      img.classList.add('hidden')
      if (fallback) fallback.classList.remove('hidden')
    })
  } else if (fallback) {
    // No thumbnail provided — show placeholder immediately
    fallback.classList.remove('hidden')
  }
})

// ── Authors bold rendering (**name** → <strong>) ──
document.querySelectorAll('[data-authors]').forEach(el => {
  el.innerHTML = el.dataset.authors.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-slate-800">$1</strong>'
  )
})
