/* eslint-disable @next/next/no-img-element */

import { twMerge } from 'tailwind-merge'
import {
  AvailableComponents,
  StrapiImageAttributes,
} from '@/domain/types/common.types'

type FullImageProps = {
  data: {
    id: number
    __component: AvailableComponents
    images: {
      data: {
        attributes: StrapiImageAttributes
      }[]
    }
  }
}

export function SideBySideImage({ data }: FullImageProps) {
  let gridClasses = ''

  if (data.images.data.length % 2 === 0) {
    gridClasses = 'grid grid-cols-2'
  } else if (data.images.data.length % 3 === 0) {
    gridClasses = 'grid grid-cols-3'
  } else if (data.images.data.length % 5 === 0) {
    gridClasses = 'grid grid-cols-2'
  }

  return (
    <div
      className='relative container mx-auto py-5'
      style={{ maxWidth: '1680px' }}
    >
      <div className='h-full mx-auto flex md:pt-0 md:items-center bg-cover bg-right'>
        <div className={twMerge('gap-6', gridClasses)}>
          {data.images.data.map((image, index) => {
            return (
              <div key={index}>
                <img
                  src={`http://localhost:1337${image.attributes.url}`}
                  alt={image.attributes.name}
                  className='h-full w-full'
                />
              </div>
            )
          })}
        </div>{' '}
      </div>
    </div>
  )
}
