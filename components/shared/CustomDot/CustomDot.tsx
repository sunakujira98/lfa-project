import { DotProps } from 'react-multi-carousel'
import { twMerge } from 'tailwind-merge'

export function CustomDot({ active, onClick, index }: DotProps) {
  return (
    <li>
      <button
        type='button'
        onClick={onClick}
        className={twMerge(
          'rounded-full w-3 h-3 bg-primary-200',
          active && 'bg-primary-600',
        )}
        aria-label={`Go to slide ${(index || 0) + 1}`}
      />
    </li>
  )
}
