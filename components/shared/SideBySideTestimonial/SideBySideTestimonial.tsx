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
    <div className='flex flex-col md:flex-row border-t-[1px] py-10 gap-10'>
      <div className='w-full md:w-1/3'>
        <video
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.video?.data.attributes.url}`}
          className='w-full md:max-w-96'
          controls
        />
      </div>
      <div className='w-full md:w-2/3 flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-2 pb-4'>
            <QuoteIcon />
            <p>{testimonial.attributes.description}</p>{' '}
          </div>
        </div>
        <div className='flex-grow flex flex-col mt-auto'></div>
        <div className='flex flex-col order-first sm:order-none gap-1 pb-4'>
          {testimonial.attributes.companyImage?.data?.attributes?.url && (
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.companyImage.data.attributes.url}`}
              className='w-44 md:max-w-56 md:hidden'
              alt={testimonial.attributes.fullName}
            />
          )}
          <h5 className='font-thin'>{testimonial.attributes.fullName}</h5>
          <h5 className='font-thin'>
            {testimonial.attributes.title}, {testimonial.attributes.company}
          </h5>
        </div>
      </div>
    </div>
  )
}
