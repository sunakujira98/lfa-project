import { tv } from '@/lib/tailwind-variant/tailwind-variant'

export const hamburgerLineStyles = tv(
  'bg-white h-[2px] w-full transition-all',
  {
    variants: {
      absolute: {
        true: 'absolute',
      },
      top: {
        true: 'top-0',
      },
      bottom: {
        true: 'bottom-0',
      },
      active: {
        true: '-rotate-45 bg-charcoal-1000',
      },
    },
    compoundVariants: [
      {
        absolute: true,
        active: true,
        className: 'rotate-45 top-1/2 -translate-y-1/2',
      },
    ],
  },
)
