/* eslint-disable @next/next/no-img-element */

import { VIDEO_EXT } from '@/domain/constants/common.constants'
import { StrapiImageAttributes } from '@/domain/types/common.types'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type SustainableMaterialsProps = {
  data: {
    id: number
    image: {
      data: {
        attributes: StrapiImageAttributes
      }
    }
    description: string
  }
}

export function SustainableMaterials({ data }: SustainableMaterialsProps) {
  const { t } = useTranslation()
  return (
    <>
      <div className='max-w-screen-xl mx-auto py-10'>
        <h6 className='neue-wide'>
          {t('featuredProject.sustainableMaterials')}
        </h6>
      </div>
      <div
        className='relative container mx-auto'
        style={{ maxWidth: '1680px' }}
      >
        <div className='h-full mx-auto flex lg:pt-0 lg:items-center bg-cover bg-right pb-10'>
          {VIDEO_EXT.includes(data.image.data.attributes.ext) ? (
            <video
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.image.data.attributes.url}`}
              className='w-screen'
              controls
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
      <div className='max-w-screen-xl mx-auto lg:pt-5 lg:pb-10'>
        <div className='flex flex-row'>
          <div className='hidden lg:block lg:w-[30%]'></div>
          <div className='w-full lg:w-[70%]'>
            <p className='neue-normal'>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
