export const categories = [
  { id: 'origin',    label: 'Origin' },
  { id: 'espresso',  label: 'Espresso' },
  { id: 'milk',      label: 'Milk' },
  { id: 'cold',      label: 'Cold' },
  { id: 'specialty', label: 'Specialty' },
  { id: 'tea',       label: 'Tea & More' },
]

export const menuSections = [
  {
    id: 'origin',
    eyebrow: 'Single Origin',
    title: 'Origin Coffee',
    intro: 'Sourced from farms we visit personally. Served as pour-over or batch brew — ask your server about today\'s available origins.',
    items: [
      { name: 'Ethiopian Yirgacheffe',  desc: 'Jasmine, bergamot, lemon zest',                         detail: 'Light roast · Pour over · Oromia Region',       price: '580',  badge: null },
      { name: 'Colombian Huila',        desc: 'Dark chocolate, hazelnut, brown sugar',                 detail: 'Medium roast · Batch brew · Huila Department',  price: '520',  badge: null },
      { name: 'Panama Gesha',           desc: 'Stone fruit, tropical florals, silky tea-like finish',  detail: 'Light roast · Pour over · Boquete, Chiriquí',    price: '1200', badge: 'Limited' },
      { name: 'Kenyan AA Kirinyaga',    desc: 'Blackcurrant, pomegranate, wine-like brightness',       detail: 'Light-medium · Pour over · Mount Kenya Region',  price: '620',  badge: null },
    ],
  },
  {
    id: 'espresso',
    eyebrow: 'Classics',
    title: 'Espresso',
    intro: 'Pulled on a La Marzocca Strada, using our house blend — 70% Colombian Supremo, 30% Ethiopian Sidama.',
    items: [
      { name: 'Ristretto',  desc: 'Concentrated sweetness, syrupy body, brief extraction',                detail: '15ml · single',            price: '350', badge: null },
      { name: 'Espresso',   desc: 'Full-bodied, balanced bitterness and fruit',                           detail: '30ml · double',            price: '350', badge: null },
      { name: 'Macchiato',  desc: 'Espresso "stained" with a dash of velvety milk foam',                  detail: '45ml · double shot',       price: '380', badge: null },
      { name: 'Cortado',    desc: 'Equal parts espresso and warm steamed milk — clarity in a small glass', detail: '90ml · double shot',       price: '420', badge: null },
      { name: 'Flat White', desc: 'Double ristretto, silky microfoam, clean finish',                      detail: '160ml · double ristretto', price: '450', badge: null },
    ],
  },
  {
    id: 'milk',
    eyebrow: 'Milk Craft',
    title: 'Milk Drinks',
    intro: 'Steamed to 65°C. We use whole Jersey milk as our standard — oat, almond, and soy available on request.',
    items: [
      { name: 'Cappuccino',    desc: 'One-third espresso, one-third milk, one-third velvety foam', detail: '150ml · double shot',     price: '450', badge: null },
      { name: 'Latte',         desc: 'Gentle, creamy, with a subtle espresso undertone',           detail: '240ml · double shot',     price: '450', badge: null },
      { name: 'Vienna Coffee', desc: 'Double espresso finished with hand-whipped fresh cream',     detail: '200ml · double shot',     price: '480', badge: null },
      { name: 'Piccolo Latte', desc: 'Ristretto in a small glass, crowned with steamed milk',      detail: '90ml · single ristretto', price: '400', badge: null },
    ],
  },
  {
    id: 'cold',
    eyebrow: 'Cold & Iced',
    title: 'Cold Coffee',
    intro: 'Our cold brew steeps for 18 hours in filtered water. Served over hand-chipped ice.',
    items: [
      { name: 'Cold Brew',          desc: 'Smooth, naturally sweet, low acidity',                        detail: '300ml · house blend · 18hr steep',          price: '520', badge: null },
      { name: 'Nitro Cold Brew',    desc: 'Nitrogen-infused, creamy cascading pour, no ice needed',      detail: '250ml · draught tap',                       price: '580', badge: null },
      { name: 'Iced Single Origin', desc: 'Bright, fruit-forward, unexpected over ice',                  detail: '300ml · Ethiopian Yirgacheffe · pour over', price: '550', badge: 'Seasonal' },
      { name: 'Iced Latte',         desc: 'Double ristretto, cold whole milk, house ice',                detail: '300ml · double ristretto',                  price: '480', badge: null },
    ],
  },
  {
    id: 'specialty',
    eyebrow: "The Chef's Table",
    title: 'Specialty',
    intro: 'Signatures created by our coffee director each season. These change — ask your server what\'s pouring today.',
    items: [
      { name: 'Black Amber',     desc: 'Cold brew, date syrup, a whisper of cardamom, served tall',        detail: 'Cold · non-dairy · autumn signature', price: '650',  badge: 'Seasonal' },
      { name: 'Silk Road Latte', desc: 'Espresso, saffron-rose water syrup, steamed oat milk',             detail: 'Hot or iced · oat milk',              price: '620',  badge: 'Signature' },
      { name: 'Café de Olla',    desc: 'Mexican-style coffee brewed with cinnamon, piloncillo, and clove',  detail: 'Hot · serves two',                    price: '750',  badge: null },
    ],
  },
  {
    id: 'tea',
    eyebrow: 'Beyond Coffee',
    title: 'Tea & Alternatives',
    intro: 'For those who prefer leaf to bean — and for moments when the evening calls for something different.',
    items: [
      { name: 'Ceremonial Matcha',           desc: 'Bright umami, grassy sweetness, whisked to a fine froth',             detail: 'Uji, Japan · hot or iced · oat milk available', price: '520', badge: null },
      { name: 'Masala Chai',                 desc: 'House spice blend — green cardamom, ginger, cinnamon, black pepper',   detail: 'Assam CTC base · steamed whole milk',           price: '380', badge: null },
      { name: 'Single-Estate Hot Chocolate', desc: 'Rich, bittersweet, with lingering red fruit notes',                    detail: '72% Venezuelan cacao · steamed whole milk',     price: '580', badge: null },
      { name: 'Darjeeling First Flush',      desc: 'Delicate, floral, muscatel — a true "champagne of teas"',              detail: "Loose leaf · single estate · Margaret's Hope",  price: '480', badge: 'Limited' },
    ],
  },
]
