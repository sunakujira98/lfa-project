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
    <div className='flex justify-between gap-6 border-t-[1px] py-10 gap-10'>
      <div className='w-1/3'>
        <video
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${testimonial.attributes.video.data.attributes.url}`}
          className='max-w-96'
          controls
        />
      </div>
      <div className='w-2/3 flex flex-col'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <QuoteIcon />
            <p>{testimonial.attributes.description}</p>{' '}
          </div>
        </div>
        <div className='flex-grow flex flex-col mt-auto'></div>
        <h5 className='font-thin'>{testimonial.attributes.fullName}</h5>
        <h5 className='font-thin'>
          {testimonial.attributes.title}, {testimonial.attributes.company}
        </h5>
      </div>
    </div>
  )
}
