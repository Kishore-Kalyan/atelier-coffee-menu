import { useTheme } from '../context/ThemeContext'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Header() {
  const { isDark, toggle, t } = useTheme()

  return (
    <header
      className="px-5 py-4 transition-colors duration-300"
      style={{ background: t.headerBg, borderBottom: `1px solid ${t.headerBorder}` }}
    >
      <div className="mx-auto flex max-w-[600px] items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9 flex-shrink-0" aria-hidden="true">
            <circle cx="18" cy="18" r="14" stroke={t.logoRing1} strokeWidth="0.8" opacity="0.5" />
            <circle cx="18" cy="18" r="8"  stroke={t.logoRing2} strokeWidth="1.2" opacity="0.8" />
            <circle cx="18" cy="18" r="2.5" fill={t.logoDot} />
          </svg>
          <div>
            <h1
              className="font-heading text-[1.35rem] uppercase leading-none tracking-[0.16em] transition-colors duration-300"
              style={{ color: t.logoName }}
            >
              Atelier
            </h1>
            <p
              className="mt-[3px] text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
              style={{ color: t.logoSub }}
            >
              Coffee Programme · Est.&nbsp;2019
            </p>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: t.toggleBg,
            color: t.toggleFg,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}
