// ─── Café Registry ────────────────────────────────────────────────────────────
// Activation is controlled via environment variables — no code changes needed.
//
// Each café's active state is read from:
//   VITE_CAFE_<SLUG_UPPERCASE>_ACTIVE=true   → menu is live
//   VITE_CAFE_<SLUG_UPPERCASE>_ACTIVE=false  → inactive page shown
//   (variable missing)                        → inactive (safe default)
//
// To activate/deactivate: change the value in Vercel dashboard → Redeploy.
// To add a new café: add an entry below + add its env var in Vercel.
//
// URL for each café:  yourdomain.com/<slug>
// ─────────────────────────────────────────────────────────────────────────────

function active(slug) {
  const key = `VITE_CAFE_${slug.toUpperCase().replace(/-/g, '_')}_ACTIVE`
  return import.meta.env[key] === 'true'
}

export const cafes = {
  "atelier": {
    name: "Atelier",
    tagline: "Coffee Programme · Est. 2019",
    active: active("atelier"),
  },

  // "cafe-xyz": {
  //   name: "Cafe XYZ",
  //   tagline: "Specialty Coffee · Indiranagar",
  //   active: active("cafe-xyz"),
  // },
}
