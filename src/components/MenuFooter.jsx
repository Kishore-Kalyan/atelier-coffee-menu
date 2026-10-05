import { useTheme } from '../context/ThemeContext'

export default function MenuFooter() {
  const { t } = useTheme()

  return (
    <footer
      className="px-6 py-12 text-center transition-colors duration-300"
      style={{ background: t.footerBg, borderTop: `1px solid ${t.footerBorder}` }}
    >
      <div className="mx-auto max-w-[600px]">
        {/* Ring mark */}
        <div className="mx-auto mb-5 flex h-9 w-9 items-center justify-center">
          <svg viewBox="0 0 48 48" fill="none" className="h-full w-full" aria-hidden="true">
            <circle cx="24" cy="24" r="18" stroke={t.toggleFg} strokeWidth="1" opacity="0.35" />
            <circle cx="24" cy="24" r="3"  fill={t.toggleFg} opacity="0.55" />
          </svg>
        </div>

        <p
          className="mb-1 font-heading text-[1.1rem] uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: t.footerName }}
        >
          Atelier
        </p>
        <p
          className="mb-7 text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
          style={{ color: t.footerSub }}
        >
          Coffee Programme
        </p>

        <div
          className="mb-7 h-px transition-colors duration-300"
          style={{ background: `linear-gradient(to right, transparent, ${t.footerDiv}, transparent)` }}
        />

        <div
          className="mb-5 space-y-1 text-[0.8rem] leading-[1.9] transition-colors duration-300"
          style={{ color: t.footerText }}
        >
          <p>12 Vittal Mallya Road, Bengaluru 560&nbsp;001</p>
          <p>Mon – Fri · 8:00 – 23:00 &nbsp;|&nbsp; Sat – Sun · 9:00 – 24:00</p>
          <p>
            <a
              href="tel:+918012345678"
              className="transition-colors duration-200"
              style={{ color: t.footerText }}
            >
              +91 80 1234 5678
            </a>
          </p>
        </div>

        <p
          className="mb-6 text-[0.68rem] leading-[1.75] transition-colors duration-300"
          style={{ color: t.footerNote }}
        >
          All prices are in Indian Rupees and inclusive of GST.
          Please inform your server of any allergies or dietary requirements.
          Some items may contain nuts, dairy, or gluten.
        </p>

        <div
          className="mb-6 h-px transition-colors duration-300"
          style={{ background: `linear-gradient(to right, transparent, ${t.footerDiv}, transparent)` }}
        />

        <p
          className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300"
          style={{ color: t.footerCopy }}
        >
          © 2026 Atelier Restaurant Ltd.
        </p>
      </div>
    </footer>
  )
}
