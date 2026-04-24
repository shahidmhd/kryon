// Named pointers to the photography in /public so components don't carry raw IG filenames.
export const IMG = {
  logo: '/logo.png',
  logoBlack: '/649241346_18051144590509756_8162119360032898422_n.jpg',
  trio: '/649235454_18051259988509756_7673028634873424945_n.jpg',
  ringsSilver: '/649231048_18051314858509756_1559552482763400334_n.jpg',
  ringsLeather: '/649238316_18051315035509756_377667530686217759_n.jpg',
  ringsBW: '/649826204_18051313124509756_8609933132492329850_n.jpg',
  ringsStudio: '/650338810_18051315044509756_3088706147200620994_n.jpg',
  chainsPortrait: '/649249647_18051314876509756_1271731546808755946_n.jpg',
  shadesWave: '/651017420_18051315023509756_7411549703335059386_n.jpg',
  braceletsCross: '/649244964_18051280526509756_7528474108487539221_n.jpg',
  lifestyleDuo: '/649641807_18051313133509756_8585003104365927166_n.jpg',
} as const;

// WhatsApp business number — country code + number, digits only (no +, no spaces).
export const WHATSAPP_NUMBER = '919037036106';

export const FAVICON = {
  manifest: '/favicon/site.webmanifest',
  ico: '/favicon/favicon.ico',
  svg: '/favicon.svg',
  png32: '/favicon/favicon-32x32.png',
  png16: '/favicon/favicon-16x16.png',
  apple: '/favicon/apple-touch-icon.png',
  android192: '/favicon/android-chrome-192x192.png',
  android512: '/favicon/android-chrome-512x512.png',
} as const;
