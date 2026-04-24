// next/image with unoptimized: true does NOT apply Next.js basePath to src,
// so we prefix paths ourselves at build time.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const p = (path: string) => `${BASE_PATH}${path}`;

// Named pointers to the photography in /public so components don't carry raw IG filenames.
export const IMG = {
  logo: p('/logo.png'),
  logoBlack: p('/649241346_18051144590509756_8162119360032898422_n.jpg'),
  trio: p('/649235454_18051259988509756_7673028634873424945_n.jpg'),
  ringsSilver: p('/649231048_18051314858509756_1559552482763400334_n.jpg'),
  ringsLeather: p('/649238316_18051315035509756_377667530686217759_n.jpg'),
  ringsBW: p('/649826204_18051313124509756_8609933132492329850_n.jpg'),
  ringsStudio: p('/650338810_18051315044509756_3088706147200620994_n.jpg'),
  chainsPortrait: p('/649249647_18051314876509756_1271731546808755946_n.jpg'),
  shadesWave: p('/651017420_18051315023509756_7411549703335059386_n.jpg'),
  braceletsCross: p('/649244964_18051280526509756_7528474108487539221_n.jpg'),
  lifestyleDuo: p('/649641807_18051313133509756_8585003104365927166_n.jpg'),
  bg1: p('/images/bg1.png'),
  bg2: p('/images/bg2.png'),
  bg3: p('/images/bg3.png'),
} as const;

// WhatsApp business number — country code + number, digits only (no +, no spaces).
export const WHATSAPP_NUMBER = '919037036106';

export const FAVICON = {
  manifest: p('/favicon/site.webmanifest'),
  ico: p('/favicon/favicon.ico'),
  svg: p('/favicon.svg'),
  png32: p('/favicon/favicon-32x32.png'),
  png16: p('/favicon/favicon-16x16.png'),
  apple: p('/favicon/apple-touch-icon.png'),
  android192: p('/favicon/android-chrome-192x192.png'),
  android512: p('/favicon/android-chrome-512x512.png'),
} as const;

export const withBase = p;
