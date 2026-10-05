import { useTheme } from '../context/ThemeContext'

export default function NotFoundPage() {
  const { t } = useTheme()

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300"
      style={{ background: t.pageBg }}
    >
      {/* Logo mark */}
      <svg viewBox="0 0 48 48" fill="none" className="mb-6 h-12 w-12" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke={t.logoRing1} strokeWidth="0.8" opacity="0.3" />
        <circle cx="24" cy="24" r="10" stroke={t.logoRing2} strokeWidth="1.2" opacity="0.4" />
        <circle cx="24" cy="24" r="3"  fill={t.logoDot} opacity="0.5" />
      </svg>

      <p
        className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] transition-colors duration-300"
        style={{ color: t.eyebrow }}
      >
        404
      </p>

      <h1
        className="mb-4 font-heading text-[1.6rem] leading-snug transition-colors duration-300"
        style={{ color: t.title }}
      >
        Menu Not Found
      </h1>

      <p
        className="max-w-[300px] text-[0.875rem] leading-[1.75] transition-colors duration-300"
        style={{ color: t.intro }}
      >
        We couldn&apos;t find a menu at this address. Please check the QR code or contact the restaurant.
      </p>

      <div
        className="mt-10 h-px w-16 transition-colors duration-300"
        style={{ background: t.accentRule }}
      />
    </div>
  )
}
