/* eslint-disable @next/next/no-img-element */
'use client'

import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'

export function Testimonial() {
  const { data } = useGetAllTestimonialQuery()

  console.log('dataa', data)

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <div className='container'>
        <div className='pb-10'>
          <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
            Testimonials
          </span>
        </div>
      </div>
      {data?.data.map((testimonial) => {
        return (
          <div className='container pb-10' key={testimonial.id}>
            <video
              src={`http://localhost:1337${testimonial.attributes.video.data.attributes.url}`}
              className='w-screen bg-cover bg-center'
              controls
              muted
            />
            <div className='flex justify-between gap-6 py-10'>
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
                  <p className='text-xs font-light'>
                    {testimonial.attributes.description}
                  </p>
                </div>
              </div>
              <div className='w-1/3 flex justify-end'>
                <div className='flex flex-col pt-4 justify-end'>
                  <h3 className='font-light text-xs'>
                    {testimonial.attributes.fullName}
                  </h3>
                  <h3 className='font-light text-xs'>
                    {testimonial.attributes.titleCompany}
                  </h3>
                  <img
                    src={`http://localhost:1337${testimonial.attributes.companyImage.data.attributes.url}`}
                    className='max-w-56'
                    alt={testimonial.attributes.fullName}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
