/* eslint-disable @next/next/no-img-element */
'use client'

import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'

import { QuoteIcon } from '../svg/icons'

type TestimonialProps = {
  data: TTestimonial
}

export function Testimonial({ data }: TestimonialProps) {
  return (
    <div className='max-w-screen-xl mx-auto lg:pt-10'>
      {data.attributes.video?.data?.attributes?.url && (
        <video
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.video.data.attributes.url}`}
          className='w-screen bg-cover bg-center pb-4 lg:pb-10'
          controls
          muted
        />
      )}
      <div className='flex flex-col lg:flex-row justify-between lg:gap-6'>
        <div className='hidden lg:flex w-full lg:w-1/3 lg:justify-end'>
          <div className='flex flex-col pt-4 lg:justify-end'>
            <h3 className='neue-normal-button lg:text-right'>
              {data.attributes.fullName}
            </h3>
            <div className='flex flex-row lg:justify-end'>
              {' '}
              <h3 className='neue-normal-button'>
                {data.attributes.title}, &nbsp;
              </h3>
              <h3 className='neue-normal-button underline'>
                {data.attributes.company}
              </h3>
            </div>

            {data.attributes.image?.data?.attributes?.url && (
              <div className='flex lg:justify-end'>
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image.data.attributes.url}`}
                  className='h-10 lg:h-12 lg:w-full lg:order-2' // Default order on lg screens
                  style={{ order: '-1' }}
                  alt={data.attributes.fullName}
                />
              </div>
            )}

            {data.attributes.companyImage?.data?.attributes?.url && (
              <div className='flex lg:justify-end'>
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.companyImage.data.attributes.url}`}
                  className='h-10 lg:h-12 lg:w-full lg:order-2' // Default order on lg screens
                  style={{ order: '-1' }}
                  alt={data.attributes.fullName}
                />
              </div>
            )}
          </div>
        </div>

        <div className='flex lg:hidden w-full lg:w-1/3 lg:justify-end'>
          <div className='flex flex-col pt-4 lg:justify-end'>
            {data.attributes.companyImage?.data?.attributes?.url && (
              <div className='flex lg:justify-end'>
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.companyImage.data.attributes.url}`}
                  className='h-10 lg:h-12 lg:w-full lg:order-2' // Default order on lg screens
                  style={{ order: '-1' }}
                  alt={data.attributes.fullName}
                />
              </div>
            )}
            <h3 className='neue-normal-button'>{data.attributes.fullName}</h3>
            <div className='flex flex-row lg:justify-end'>
              {' '}
              <h3 className='neue-normal-button'>
                {data.attributes.title}, &nbsp;
              </h3>
              <h3 className='neue-normal-button underline'>
                {data.attributes.company}
              </h3>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/3 lg:order-first'>
          <div className='gap-4 lg:border-t-[1px] lg:border-r-[1px] lg:rounded-tr-[40px] lg:py-10 mt-4 lg:gap-0 border-charcoal-1000'>
            <QuoteIcon className='mb-4' />
            <p className='lg:w-[90%] neue-normal'>
              {data.attributes.description}
            </p>
          </div>
        </div>
        <div className='lg:hidden pt-10 border-b-[1px]'></div>
      </div>
    </div>
  )
}
