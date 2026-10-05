import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observers = []
    const visibleSections = new Map()

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibleSections.set(id, entry.intersectionRatio)
          // pick the section with the highest intersection ratio
          let best = ids[0]
          let bestRatio = -1
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = sectionId }
          })
          setActive(best)
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: '-60px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [ids])

  return active
}
