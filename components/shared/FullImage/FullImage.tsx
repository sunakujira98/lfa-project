/* eslint-disable @next/next/no-img-element */

import { VIDEO_EXT } from '@/domain/constants/common.constants'
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
      <div className='h-full mx-auto flex lg:pt-0 lg:items-center bg-cover bg-right'>
        {VIDEO_EXT.includes(data.image.data.attributes.ext) ? (
          <video
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.image.data.attributes.url}`}
            className='w-screen'
            controls
            playsInline
            loop
            muted
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.image.data.attributes.url}`}
            className='w-screen'
            alt={data.image.data.attributes.name}
          />
        )}
      </div>
    </div>
  )
}
