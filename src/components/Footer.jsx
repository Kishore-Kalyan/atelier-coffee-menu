export default function Footer() {
  return (
    <footer style={{ background: '#0F0703', borderTop: '1px solid rgba(245,230,211,0.05)' }} className="px-6 pb-8 pt-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 grid grid-cols-1 gap-12 border-b border-parchment/[0.06] pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="mb-0 flex items-center gap-[10px] no-underline" aria-label="BrewFlow home">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                <rect width="34" height="34" rx="9" fill="rgba(234,88,12,.14)"/>
                <path d="M9 15h16v9a4 4 0 01-4 4H13a4 4 0 01-4-4v-9z" fill="#D97706" opacity=".9"/>
                <path d="M9 15h16l-1.5-4h-13L9 15z" fill="#EA580C"/>
                <path d="M25 17h2a2 2 0 110 4h-2" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-heading text-[1.375rem] tracking-[-0.015em] text-parchment">BrewFlow</span>
            </a>
            <p className="mt-[14px] max-w-[270px] text-[0.9375rem] leading-[1.75] text-parchment/[0.35]">
              Connecting coffee lovers with the world&apos;s finest roasters, one bag at a time.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-parchment/[0.28]">Product</h3>
            <ul className="flex flex-col gap-[10px]">
              {[['#features', 'Features'], ['#how-it-works', 'How It Works'], ['#pricing', 'Pricing'], ['#', 'Gift a Subscription']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-[0.9375rem] text-parchment/[0.45] no-underline transition-colors duration-200 hover:text-parchment/80">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-parchment/[0.28]">Company</h3>
            <ul className="flex flex-col gap-[10px]">
              {[['#', 'About Us'], ['#', 'Our Roasters'], ['#', 'Sustainability'], ['#', 'Careers']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-[0.9375rem] text-parchment/[0.45] no-underline transition-colors duration-200 hover:text-parchment/80">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-parchment/[0.28]">Support</h3>
            <ul className="flex flex-col gap-[10px]">
              {[['#', 'Help Centre'], ['#', 'Brew Guide'], ['#', 'Account'], ['#', 'Contact']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} className="text-[0.9375rem] text-parchment/[0.45] no-underline transition-colors duration-200 hover:text-parchment/80">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.875rem] text-parchment/[0.22]">&copy; 2026 BrewFlow, Inc. All rights reserved.</p>
          <ul className="flex gap-6">
            {[['#', 'Privacy Policy'], ['#', 'Terms of Service'], ['#', 'Cookie Settings']].map(([href, label]) => (
              <li key={label}>
                <a href={href} className="text-[0.875rem] text-parchment/[0.28] no-underline transition-colors duration-200 hover:text-parchment/60">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
