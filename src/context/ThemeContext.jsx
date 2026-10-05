import { createContext, useContext, useState } from 'react'

export const themes = {
  light: {
    pageBg:         '#F4EBD9',
    headerBg:       '#EEE0C6',
    headerBorder:   'rgba(160,110,40,0.22)',
    navBg:          '#E8D8BC',
    navBorder:      'rgba(160,110,40,0.18)',
    navActive:      '#7A4E10',
    navInactive:    'rgba(28,8,5,0.38)',
    navIndicator:   '#8B5E1A',
    sectionOdd:     '#F4EBD9',
    sectionEven:    '#EDE1CC',
    sectionHdrOdd:  '#E8D8BC',
    sectionHdrEven: '#E0CEB0',
    sectionBorder:  'rgba(180,140,80,0.3)',
    eyebrow:        '#8B5E1A',
    title:          '#1C0805',
    intro:          '#6B3E1E',
    itemName:       '#1C0805',
    itemDesc:       '#5A3218',
    itemDetail:     '#9A7040',
    itemPrice:      '#7A4E10',
    itemDivider:    'rgba(160,110,50,0.18)',
    accentRule:     'rgba(180,130,40,0.3)',
    logoRing1:      '#8B5E1A',
    logoRing2:      '#8B5E1A',
    logoDot:        '#8B5E1A',
    logoName:       '#1C0805',
    logoSub:        'rgba(139,94,26,0.68)',
    toggleBg:       'rgba(28,8,5,0.07)',
    toggleFg:       '#7A4E10',
    footerBg:       '#1C0A04',
    footerName:     'rgba(245,230,211,0.55)',
    footerSub:      'rgba(197,120,30,0.55)',
    footerText:     'rgba(245,230,211,0.42)',
    footerNote:     'rgba(245,230,211,0.25)',
    footerCopy:     'rgba(245,230,211,0.18)',
    footerBorder:   'rgba(200,160,80,0.12)',
    footerDiv:      'rgba(245,230,211,0.08)',
    badgeL:  { border: '#A07820', color: '#7A5810' },
    badgeS:  { border: '#B06010', color: '#884010' },
    badgeSig:{ border: '#8B6030', color: '#6A4020' },
  },
  dark: {
    pageBg:         '#140804',
    headerBg:       '#0C0502',
    headerBorder:   'rgba(245,230,211,0.07)',
    navBg:          '#140804',
    navBorder:      'rgba(245,230,211,0.07)',
    navActive:      '#D97706',
    navInactive:    'rgba(245,230,211,0.40)',
    navIndicator:   '#D97706',
    sectionOdd:     '#170905',
    sectionEven:    '#120703',
    sectionHdrOdd:  '#120703',
    sectionHdrEven: '#0F0602',
    sectionBorder:  'rgba(245,230,211,0.06)',
    eyebrow:        'rgba(217,119,6,0.80)',
    title:          '#F5E6D3',
    intro:          'rgba(245,230,211,0.50)',
    itemName:       '#F0DECA',
    itemDesc:       'rgba(245,230,211,0.62)',
    itemDetail:     'rgba(245,230,211,0.42)',
    itemPrice:      '#D97706',
    itemDivider:    'rgba(245,230,211,0.07)',
    accentRule:     'rgba(200,120,20,0.2)',
    logoRing1:      '#C9A84C',
    logoRing2:      '#C9A84C',
    logoDot:        '#C9A84C',
    logoName:       '#F5E6D3',
    logoSub:        'rgba(217,119,6,0.65)',
    toggleBg:       'rgba(245,230,211,0.07)',
    toggleFg:       '#C9A84C',
    footerBg:       '#080401',
    footerName:     'rgba(245,230,211,0.52)',
    footerSub:      'rgba(217,119,6,0.48)',
    footerText:     'rgba(245,230,211,0.40)',
    footerNote:     'rgba(245,230,211,0.24)',
    footerCopy:     'rgba(245,230,211,0.16)',
    footerBorder:   'rgba(245,230,211,0.06)',
    footerDiv:      'rgba(245,230,211,0.06)',
    badgeL:  { border: 'rgba(240,185,60,0.5)',  color: 'rgba(240,185,60,0.88)' },
    badgeS:  { border: 'rgba(217,119,6,0.5)',   color: 'rgba(217,119,6,0.88)'  },
    badgeSig:{ border: 'rgba(245,230,211,0.32)',color: 'rgba(245,230,211,0.60)' },
  },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('atelier-theme') === 'dark' } catch { return false }
  })

  const toggle = () =>
    setIsDark(prev => {
      const next = !prev
      try { localStorage.setItem('atelier-theme', next ? 'dark' : 'light') } catch {}
      return next
    })

  const t = isDark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ isDark, toggle, t }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
