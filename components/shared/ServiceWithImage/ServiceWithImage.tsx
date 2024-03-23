/* eslint-disable @next/next/no-img-element */

'use client'

import { TService } from '@/domain/types/services.types'

type ServiceWithImageProps = {
  service: TService
}

export function ServiceWithImage({ service }: ServiceWithImageProps) {
  return (
    <div className='flex flex-col lg:flex-row justify-between border-t-[1px] py-10 gap-4 lg:gap-40 lg:px-0'>
      <div className='w-full lg:w-1/3'>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.image?.data.attributes.url}`}
          className='w-full max-sm:max-w-full md:w-full'
          alt={service.attributes.title}
        />
      </div>
      <div className='w-full lg:w-2/3 flex flex-col gap-4'>
        <div className='flex flex-row lg:justify-between items-center gap-4 lg:gap-0'>
          <h4 className='font-thin max-md:text-sm'>
            {service.attributes.title}
          </h4>
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
            className='text-charcoal-1000 order-first lg:order-none lg:ml-4 max-md:w-8 md:w-8 lg:w-12'
            alt={service.attributes.title}
          />
        </div>

        <div className='flex-grow flex'>
          <p className='mt-auto font-thin max-md:text-3xs'>
            {service.attributes.description}
          </p>{' '}
        </div>
      </div>
    </div>
  )
}
