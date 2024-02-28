/* eslint-disable @next/next/no-img-element */

import {
  AvailableComponents,
  StrapiImageAttributes,
} from '@/domain/types/common.types'

type FullImageProps = {
  data: {
    id: number
    __component: AvailableComponents
    image: {
      data: {
        attributes: StrapiImageAttributes
      }
    }
  }
}

export function FullImage({ data }: FullImageProps) {
  return (
    <div
      className='relative container mx-auto py-5'
      style={{ maxWidth: '1680px' }}
    >
      <div className='h-full mx-auto flex md:pt-0 md:items-center bg-cover bg-right'>
        <img
          src={`http://localhost:1337${data.image.data.attributes.url}`}
          className='w-screen'
          alt={data.image.data.attributes.name}
        />
      </div>
    </div>
  )
}
