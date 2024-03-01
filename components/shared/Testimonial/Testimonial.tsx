/* eslint-disable @next/next/no-img-element */
'use client'

import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'

type TestimonialProps = {
  data: TTestimonial
}

export function Testimonial({ data }: TestimonialProps) {
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <div className='container pb-10'>
        {data.attributes.video?.data?.attributes?.url && (
          <video
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.video.data.attributes.url}`}
            className='w-screen bg-cover bg-center'
            controls
            muted
          />
        )}
        <div className='flex justify-between gap-6'>
          <div className='w-2/3'>
            <div className='border-t-[1px] border-r-[1px] rounded-tr-[40px] rounded py-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
              >
                <path
                  d='M11.5 15.7929L0.5 26.7929V4.5H11.5V15.7929ZM31.5 15.7929L20.5 26.7929V4.5H31.5V15.7929Z'
                  stroke='#464646'
                />
              </svg>
              <p>{data.attributes.description}</p>
            </div>
          </div>
          <div className='w-1/3 flex justify-end'>
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
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image.data.attributes.url}`}
                  className='max-w-56'
                  alt={data.attributes.fullName}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
