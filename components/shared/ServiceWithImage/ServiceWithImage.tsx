/* eslint-disable @next/next/no-img-element */

'use client'

import { Service } from '@/domain/types/services.types'

type ServiceWithImageProps = {
  service: Service
}

export function ServiceWithImage({ service }: ServiceWithImageProps) {
  return (
    <div className='flex flex-col md:flex-row justify-between border-t-[1px] py-10 gap-10 md:gap-40 px-4 md:px-0'>
      <div className='w-full md:w-1/3'>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.image?.data.attributes.url}`}
          className='max-w-80'
          alt={service.attributes.title}
        />
      </div>
      <div className='w-full md:w-2/3 flex flex-col'>
        <div className='flex flex-row md:justify-between items-center gap-4 md:gap-0'>
          <h4 className='font-thin'>{service.attributes.title}</h4>
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
            className='text-charcoal-1000 order-first md:order-none md:ml-4'
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
