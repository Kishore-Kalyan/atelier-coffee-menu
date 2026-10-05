import { useParams } from 'react-router-dom'
import { cafes } from '../data/cafes'
import MenuPage from './MenuPage'
import InactivePage from './InactivePage'
import NotFoundPage from './NotFoundPage'

export default function CafePage() {
  const { slug } = useParams()
  const cafe = cafes[slug]

  if (!cafe)          return <NotFoundPage />
  if (!cafe.active)   return <InactivePage cafe={cafe} />
  return <MenuPage />
}
