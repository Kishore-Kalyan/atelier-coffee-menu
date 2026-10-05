import { useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { categories } from '../data/menu'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = categories.map(c => c.id)

export default function MenuNav() {
  const { t } = useTheme()
  const active = useActiveSection(sectionIds)
  const navRef = useRef(null)
  const activeRef = useRef(null)

  useEffect(() => {
    if (activeRef.current && navRef.current) {
      const nav = navRef.current
      const btn = activeRef.current
      const navRect = nav.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      const scrollLeft = nav.scrollLeft + btnRect.left - navRect.left - (navRect.width - btnRect.width) / 2
      nav.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [active])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 108
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{ background: t.navBg, borderBottom: `1px solid ${t.navBorder}`, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <nav
        ref={navRef}
        className="flex overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        aria-label="Menu categories"
      >
        <div className="w-3 flex-shrink-0" />
        {categories.map(cat => {
          const isActive = active === cat.id
          return (
            <button
              key={cat.id}
              ref={isActive ? activeRef : null}
              onClick={() => scrollTo(cat.id)}
              className="relative flex-shrink-0 px-4 py-[13px] text-[0.7rem] font-bold uppercase tracking-[0.15em] transition-colors duration-200 focus-visible:outline-none"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isActive ? t.navActive : t.navInactive,
              }}
              aria-current={isActive ? 'true' : undefined}
            >
              {cat.label}
              {isActive && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ background: t.navIndicator }}
                />
              )}
            </button>
          )
        })}
        <div className="w-3 flex-shrink-0" />
      </nav>
    </div>
  )
}
