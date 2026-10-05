import { useTheme } from '../context/ThemeContext'

export default function MenuItem({ item, isLast }) {
  const { t } = useTheme()

  const badge = item.badge
    ? (item.badge === 'Limited'   ? t.badgeL
    :  item.badge === 'Seasonal'  ? t.badgeS
    :  item.badge === 'Signature' ? t.badgeSig
    :  t.badgeL)
    : null

  return (
    <div>
      <div className="flex items-start justify-between gap-4 py-[18px]">
        {/* Left */}
        <div className="min-w-0 flex-1">
          <div className="mb-[5px] flex flex-wrap items-center gap-2">
            <span
              className="font-heading text-[1.0625rem] leading-snug transition-colors duration-300"
              style={{ color: t.itemName }}
            >
              {item.name}
            </span>
            {item.badge && (
              <span
                className="inline-block rounded-sm px-[6px] py-[2px] text-[0.58rem] font-bold uppercase tracking-[0.1em] transition-colors duration-300"
                style={{ border: `1px solid ${badge.border}`, color: badge.color }}
              >
                {item.badge}
              </span>
            )}
          </div>

          <p
            className="mb-[4px] text-[0.875rem] italic leading-[1.5] transition-colors duration-300"
            style={{ color: t.itemDesc }}
          >
            {item.desc}
          </p>

          <p
            className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-300"
            style={{ color: t.itemDetail }}
          >
            {item.detail}
          </p>
        </div>

        {/* Price */}
        <div className="flex-shrink-0 pt-[1px]">
          <span
            className="font-heading text-[1.05rem] leading-none transition-colors duration-300"
            style={{ color: t.itemPrice }}
          >
            ₹{item.price}
          </span>
        </div>
      </div>

      {!isLast && (
        <div className="h-px transition-colors duration-300" style={{ background: t.itemDivider }} />
      )}
    </div>
  )
}
