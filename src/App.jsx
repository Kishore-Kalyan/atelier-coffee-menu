import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CafePage from './pages/CafePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root: redirect to the default café */}
        <Route path="/" element={<Navigate to="/atelier" replace />} />

        {/* Each café gets its own URL: /<slug> */}
        <Route path="/:slug" element={<CafePage />} />

        {/* Anything else is a 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
