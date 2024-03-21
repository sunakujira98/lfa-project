import { DotProps } from 'react-multi-carousel'
import { twMerge } from 'tailwind-merge'

export function CustomDot({ active, onClick }: DotProps) {
  return (
    <li>
      <button
        type='button'
        onClick={onClick}
        className={twMerge(
          'mt-10 rounded-full w-2 h-2 bg-transparent border-[1px] border-primary-600 mx-1',
          active && 'bg-primary-600',
        )}
      />
    </li>
  )
}
