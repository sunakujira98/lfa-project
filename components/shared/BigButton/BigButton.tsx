/* eslint-disable @next/next/no-img-element */

import { twMerge } from 'tailwind-merge'

type BigButtonProps = {
  active: boolean
  onClick: () => void
  title: string
  icon?: string
}

export function BigButton({ active, onClick, title, icon }: BigButtonProps) {
  return (
    <button
      className={twMerge(
        active ? 'bg-primary-900 text-greige' : 'hover:bg-greige',
        'w-full py-4 px-8 rounded-full',
      )}
      onClick={onClick}
    >
      <div className='flex justify-between items-center'>
        <span className='text-xs font-thin'>{title}</span>
        {icon && (
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${icon}`}
            className='text-charcoal-1000'
            alt={title}
          />
        )}
      </div>
    </button>
  )
}
