/* eslint-disable @next/next/no-img-element */
'use client'

import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'

import { QuoteIcon } from '../svg/icons'

type TestimonialProps = {
  data: TTestimonial
}

export function Testimonial({ data }: TestimonialProps) {
  return (
    <div className='max-w-screen-xl mx-auto md:pt-10'>
      <div className='container'>
        {data.attributes.video?.data?.attributes?.url && (
          <video
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.video.data.attributes.url}`}
            className='w-screen bg-cover bg-center pb-4'
            controls
            muted
          />
        )}
        <div className='flex flex-col md:flex-row justify-between md:gap-6'>
          <div className='w-full md:w-1/3 flex md:justify-end'>
            <div className='flex flex-col pt-4 justify-end'>
              <h3 className='font-light text-xs'>{data.attributes.fullName}</h3>
              <div className='flex flex-row'>
                <h3 className='font-light text-xs'>
                  {data.attributes.title}, &nbsp;
                </h3>
                <h3 className='font-light text-xs'>
                  {data.attributes.company}
                </h3>
              </div>

              {data.attributes.image?.data?.attributes?.url && (
                <div className='flex order-first sm:order-none'>
                  <img
                    src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image.data.attributes.url}`}
                    className='max-w-56'
                    alt={data.attributes.fullName}
                  />
                </div>
              )}
            </div>
          </div>
          <div className='w-full md:w-2/3 md:order-first'>
            <div className='gap-4 md:border-t-[1px] md:border-r-[1px] md:rounded-tr-[40px] md:rounded md:py-8 mt-4 md:gap-0'>
              <QuoteIcon className='mb-4' />
              <p className='md:w-[90%]'>{data.attributes.description}</p>
            </div>
          </div>
          <div className='pt-10 border-b-[1px]'></div>
        </div>
      </div>
    </div>
  )
}
