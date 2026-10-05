export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 text-center"
      style={{
        background: '#1A0A05',
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,69,19,.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 30% at 20% 80%, rgba(201,168,76,.05) 0%, transparent 60%)
        `,
      }}
      aria-label="Introduction"
    >
      {/* Subtle top grain line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-parchment/10 to-transparent" />

      <div className="mx-auto max-w-[520px]">
        <span className="mb-5 inline-block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-caramel/70">
          Est. 2019 &nbsp;·&nbsp; London
        </span>

        <h2
          className="mb-6 font-heading text-[clamp(1.75rem,5vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-parchment/90"
        >
          Every cup,<br />
          <em className="text-caramel" style={{ fontStyle: 'italic' }}>a considered one.</em>
        </h2>

        <p className="text-[0.9375rem] leading-[1.8] text-parchment/45">
          Our coffee programme is guided by relationships with producers, precision in preparation, and an obsession with flavour above all else.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-espresso/30 to-transparent" />
    </section>
  )
}
