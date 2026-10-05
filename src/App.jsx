import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import MenuNav from './components/MenuNav'
import MenuSection from './components/MenuSection'
import MenuFooter from './components/MenuFooter'
import { menuSections } from './data/menu'

export default function App() {
  const { t } = useTheme()
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: t.pageBg }}>
      <Header />
      <MenuNav />
      <main>
        {menuSections.map((section, i) => (
          <MenuSection key={section.id} section={section} alternate={i % 2 === 1} />
        ))}
      </main>
      <MenuFooter />
    </div>
  )
}
