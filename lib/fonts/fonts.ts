import localFont from 'next/font/local'

export const neue = localFont({
  src: [
    {
      path: '../../public/fonts/neue/neue-haas-unica.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neue/neue-haas-unica-400.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue',
})

export const keppler = localFont({
  src: [
    {
      path: '../../public/fonts/keppler/kepler-std-extended-display.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-keppler',
})

export const vinila = localFont({
  src: [
    {
      path: '../../public/fonts/vinila/vinila.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-vinila',
})
