// ─── Café Registry ────────────────────────────────────────────────────────────
// To activate a café:   set active: true  → commit → push → Vercel redeploys
// To deactivate a café: set active: false → commit → push → Vercel redeploys
// To add a new café:    add a new entry below, set active: false initially
//
// URL for each café:  yourdomain.com/<slug>
// ─────────────────────────────────────────────────────────────────────────────

export const cafes = {
  "atelier": {
    name: "Atelier",
    tagline: "Coffee Programme · Est. 2019",
    active: true,
  },

  // "cafe-xyz": {
  //   name: "Cafe XYZ",
  //   tagline: "Specialty Coffee · Indiranagar",
  //   active: false,
  // },
}
