/* eslint-disable @next/next/no-img-element */

'use client'

import { Service } from '@/domain/types/services.types'

type ServiceWithImageProps = {
  service: Service
}

export function ServiceWithImage({ service }: ServiceWithImageProps) {
  return (
    <div className='flex justify-between gap-6 border-t-[1px] py-10 gap-10'>
      <div className='w-1/3'>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.image?.data.attributes.url}`}
          className='max-w-80'
          alt={service.attributes.title}
        />
      </div>
      <div className='w-2/3 flex flex-col'>
        <div className='flex justify-between items-center'>
          <h4 className='font-thin'>{service.attributes.title}</h4>
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
            className='text-charcoal-1000'
            alt={service.attributes.title}
          />
        </div>
        <div className='flex-grow flex'>
          <p className='mt-auto'>{service.attributes.description}</p>{' '}
        </div>
      </div>
    </div>
  )
}
