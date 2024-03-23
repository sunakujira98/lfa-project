import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './section/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '3xs': '0.75rem',
      '2xs': '0.875rem',
      xs: '1rem',
      sm: '1.125rem',
      lg: '1.25rem',
      md: '1.5rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '4rem',
      '6xl': '6rem',
    },
    fontFamily: {
      neue: ['var(--font-neue)', 'sans-serif'],
      keppler: ['var(--font-keppler)', 'sans-serif'],
      vinila: ['var(--font-vinila)', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#F7F7FF',
        700: '#3B3B40',
        600: '#62626A',
        800: '#26262C',
        900: '#111117',
      },
      charcoal: {
        100: '#7A7979',
        600: '#A3A3A3',
        1000: '#252525',
      },
      gray: {
        50: '#464646',
        100: '#E9E8EE',
        200: '#9799A6',
        300: '#494A52',
      },
      white: '#FFFFFF',
      lfaWhite: '#FFFAEF',
      greige: '#CCC0B4',
      beige: '#E4DDD6',
      cyan: '#74F1FB',
      error: '#F95E76',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        hero: "url('/public/images/bg-hero.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
export default config
