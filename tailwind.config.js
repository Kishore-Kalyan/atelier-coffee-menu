/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso:     '#1A0A05',
        'dark-roast': '#2A1508',
        'medium-roast': '#8B4513',
        'light-roast': '#C4682B',
        caramel:      '#D97706',
        golden:       '#F59E0B',
        gold:         '#C9A84C',
        cream:        '#FFF8F2',
        'warm-white': '#FFFAF7',
        parchment:    '#F5E6D3',
        mocha:        '#3D1F0A',
        muted:        '#7C5A45',
        cta:          '#EA580C',
        'cta-hover':  '#DC4E08',
      },
      fontFamily: {
        heading: ['Calistoga', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
