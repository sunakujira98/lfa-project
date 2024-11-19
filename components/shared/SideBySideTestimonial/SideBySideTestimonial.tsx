/* eslint-disable @next/next/no-img-element */

'use client'

import { Testimonial } from '@/domain/types/testimonial.types'

import { QuoteIcon } from '../svg/icons'

type SideBySideTestimonialProps = {
  testimonial: Testimonial
}

export function SideBySideTestimonial({
  testimonial,
}: SideBySideTestimonialProps) {
  return (
    <div className='flex flex-col lg:flex-row border-t-[1px] border-charcoal-100 py-10 gap-10'>
      <div className='w-full lg:w-[32%]'>
        <video
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.video?.data.attributes.url}`}
          className='w-full lg:max-w-96'
          controls
          playsInline
          autoPlay
          loop
          muted
        />
      </div>
      <div className='w-full lg:w-[68%] flex flex-col'>
        <div className='flex justify-between items-center max-md:order-2 max-md:pt-4'>
          <div className='flex flex-col gap-2 pb-4'>
            <QuoteIcon />
            <p className='text-justify neue-normal'>
              {testimonial.attributes.description}
            </p>{' '}
          </div>
        </div>
        <div className='flex-grow flex'>
          <div className='mt-auto neue-normal'>
            {/* {testimonial.attributes.companyImage?.data?.attributes?.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.companyImage.data.attributes.url}`}
                className='h-10 lg:hidden'
                alt={testimonial.attributes.fullName}
              />
            )} */}
            {testimonial.attributes.image?.data?.attributes?.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.image.data.attributes.url}`}
                className='h-10 lg:hidden'
                alt={testimonial.attributes.fullName}
              />
            )}
            <h5 className='neue-normal lg:!font-normal'>
              {testimonial.attributes.fullName}
            </h5>
            <div className='flex flex-row gap-[2px]'>
              <h5 className='neue-normal lg:!font-normal'>
                {testimonial.attributes.title},
              </h5>
              <a
                href={testimonial.attributes.projectLink}
                className='cursor-pointer'
              >
                <h5 className='neue-normal lg:!font-normal underline'>
                  {testimonial.attributes.company}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
