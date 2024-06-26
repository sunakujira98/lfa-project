/* eslint-disable @next/next/no-img-element */

'use client'

import { TService } from '@/domain/types/services.types'

type ServiceWithImageProps = {
  service: TService
}

export function ServiceWithImage({ service }: ServiceWithImageProps) {
  return (
    <div className='flex flex-col lg:flex-row justify-between border-t-[1px] border-charcoal-100 py-10 gap-4 lg:gap-10 lg:px-0'>
      <div className='w-full lg:w-[30%]'>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.image?.data.attributes.url}`}
          className='w-full max-sm:max-w-full md:w-full'
          alt={service.attributes.title}
        />
      </div>
      <div className='w-full lg:w-[70%] flex flex-col gap-4'>
        <div className='flex flex-row lg:justify-between items-center gap-4 lg:gap-0'>
          <h4 className='neue-wider'>{service.attributes.title}</h4>
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
            className='text-charcoal-1000 order-first lg:order-none lg:ml-4 max-md:w-8 md:w-8 lg:w-12'
            alt={service.attributes.title}
          />
        </div>

        <div className='flex-grow flex'>
          <p className='mt-auto neue-normal'>
            {service.attributes.description}
          </p>
        </div>
      </div>
    </div>
  )
}
