import { useTheme } from '../context/ThemeContext'
import MenuItem from './MenuItem'

export default function MenuSection({ section, alternate }) {
  const { t } = useTheme()

  const bg       = alternate ? t.sectionEven    : t.sectionOdd
  const headerBg = alternate ? t.sectionHdrEven : t.sectionHdrOdd

  return (
    <section
      id={section.id}
      className="transition-colors duration-300"
      style={{ background: bg, borderBottom: `1px solid ${t.sectionBorder}` }}
      aria-labelledby={`${section.id}-title`}
    >
      {/* Section header */}
      <div className="px-5 pb-5 pt-8 transition-colors duration-300" style={{ background: headerBg }}>
        <div className="mx-auto max-w-[600px]">
          <span
            className="mb-1 inline-block text-[0.6rem] font-bold uppercase tracking-[0.22em] transition-colors duration-300"
            style={{ color: t.eyebrow }}
          >
            {section.eyebrow}
          </span>
          <h2
            id={`${section.id}-title`}
            className="mb-2 font-heading text-[1.5rem] leading-tight transition-colors duration-300"
            style={{ color: t.title }}
          >
            {section.title}
          </h2>
          <p
            className="text-[0.8125rem] leading-[1.7] transition-colors duration-300"
            style={{ color: t.intro }}
          >
            {section.intro}
          </p>
        </div>
      </div>

      {/* Accent rule */}
      <div
        className="mx-5 h-px transition-colors duration-300"
        style={{ background: `linear-gradient(to right, ${t.accentRule}, transparent)` }}
      />

      {/* Items */}
      <div className="mx-auto max-w-[600px] px-5 pb-4 pt-0">
        {section.items.map((item, i) => (
          <MenuItem
            key={item.name}
            item={item}
            isLast={i === section.items.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
