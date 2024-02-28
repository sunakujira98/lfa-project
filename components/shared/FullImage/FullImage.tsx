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
    <img
      src={`http://localhost:1337${data.image.data.attributes.url}`}
      className='w-screen'
      alt={data.image.data.attributes.name}
    />
  )
}
