import { IMG } from './assets';

export type Product = {
  id: string;
  name: string;
  category: 'Rings' | 'Chains' | 'Shades' | 'Bracelets';
  price: number;
  badge?: string;
  image: string;
  imageAlt: string;
  tone: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 'cross-signet',
    name: 'Iron Cross Signet',
    category: 'Rings',
    price: 129,
    badge: 'Limited',
    image: IMG.ringsStudio,
    imageAlt: 'Iron cross signet ring styled with silver hardware',
    tone: '#1e7fff',
    description:
      'Statement cross signet with hand-darkened recesses. Polished 316L stainless, ion-plated silver finish.',
  },
  {
    id: 'snake-coil',
    name: 'Snake Coil Ring',
    category: 'Rings',
    price: 119,
    image: IMG.ringsBW,
    imageAlt: 'Silver snake coil ring worn with leather outerwear',
    tone: '#7a5cff',
    description:
      'Double-wrap serpent band with textured scales and cut-diamond eyes. Wraps your finger like liquid metal.',
  },
  {
    id: 'skull-grip',
    name: 'Skull Grip Ring',
    category: 'Rings',
    price: 159,
    badge: 'Bestseller',
    image: IMG.ringsLeather,
    imageAlt: 'Silver skull grip statement ring worn with black leather jacket',
    tone: '#ff3bd4',
    description:
      'Hand-carved skull with gripping claws wraps the finger. Heavy, intentional, impossible to miss.',
  },
  {
    id: 'ice-crown-stack',
    name: 'Ice Crown Stack',
    category: 'Rings',
    price: 189,
    image: IMG.ringsSilver,
    imageAlt: 'Stacked silver rings styled on fingers with red manicure',
    tone: '#5ea8ff',
    description:
      'Curated four-ring stack. Mix of braided, signet, and rail bands. Sizeable individually.',
  },
  {
    id: 'ice-link-chain',
    name: 'Ice Link Chain 4mm',
    category: 'Chains',
    price: 189,
    badge: 'New',
    image: IMG.chainsPortrait,
    imageAlt: 'Silver ice link chain necklace worn with silver puffer',
    tone: '#3d8bff',
    description:
      'Crushed-ice cubic zirconia link chain. Weightless on, liquid in motion. 18" / 20" / 22".',
  },
  {
    id: 'cross-pendant-chain',
    name: 'Cross Pendant Chain',
    category: 'Chains',
    price: 149,
    image: IMG.shadesWave,
    imageAlt: 'Double-layer silver cross pendant chain on male model with shades',
    tone: '#7fb4ff',
    description:
      'Double-layered chain with cross drop. Wear it on its own or stack with the Ice Link.',
  },
  {
    id: 'wave-visor',
    name: 'Wave Visor Shades',
    category: 'Shades',
    price: 219,
    badge: 'Drop',
    image: IMG.shadesWave,
    imageAlt: 'Sculpted black wave-visor shades on blue backdrop',
    tone: '#0b3d91',
    description:
      'Sculpted TR90 shield with carved wave temples. UV400 polarized. Cut for main-character energy.',
  },
  {
    id: 'oversized-shield',
    name: 'Oversized Shield',
    category: 'Shades',
    price: 179,
    image: IMG.trio,
    imageAlt: 'Oversized black shield shades worn with oversized black outerwear',
    tone: '#a58bff',
    description:
      'Chunky oversized shield with gradient black lens. The "don’t talk to me" energy, bottled.',
  },
  {
    id: 'ice-cuff',
    name: 'Ice Cuff Bracelet',
    category: 'Bracelets',
    price: 139,
    image: IMG.braceletsCross,
    imageAlt: 'Silver ice cuff bracelet stacked on crossed arms',
    tone: '#1e7fff',
    description:
      'Magnetic-clasp cuff with channel-set cubic zirconia. Sits flat, hits hard.',
  },
  {
    id: 'ball-link-chain',
    name: 'Ball Link Bracelet',
    category: 'Bracelets',
    price: 119,
    image: IMG.braceletsCross,
    imageAlt: 'Silver ball link bracelet stack on crossed arms',
    tone: '#ff6fdc',
    description:
      'Tight 4mm ball chain bracelet. Wears like a quiet flex — pairs with anything.',
  },
  {
    id: 'twist-bangle',
    name: 'Twist Bangle',
    category: 'Bracelets',
    price: 129,
    image: IMG.ringsBW,
    imageAlt: 'Twisted silver bangle detail',
    tone: '#5ea8ff',
    description:
      'Closed bangle with deep rope-twist relief. Weight that tells you it’s there.',
  },
  {
    id: 'halo-duo-ring',
    name: 'Halo Duo Ring',
    category: 'Rings',
    price: 139,
    image: IMG.lifestyleDuo,
    imageAlt: 'Paired silver halo rings on styled duo in studio',
    tone: '#7a5cff',
    description:
      'Matched pair of halo bands. Wear one, gift one. Comes in a twin velvet case.',
  },
];

export const categories: Product['category'][] = [
  'Rings',
  'Chains',
  'Shades',
  'Bracelets',
];
