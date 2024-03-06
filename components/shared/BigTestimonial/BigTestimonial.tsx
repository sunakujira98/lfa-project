'use client'

import { Testimonial } from '@/components/shared/Testimonial'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'

export function BigTestimonial() {
  const { data, isSuccess } = useGetAllTestimonialQuery()

  return (
    <div className='max-w-screen-xl mx-auto md:pt-10 px-4 md:px-0'>
      <div className='container'>
        <div className='pb-10 md:pb-0'>
          <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
            Testimonials
          </span>
        </div>
      </div>
      {isSuccess &&
        data.data?.map((testimonial) => {
          return (
            <div className='pb-10 md:p-0'>
              <Testimonial data={testimonial} key={testimonial.id} />
            </div>
          )
        })}
      <div className='flex items-center justify-center py-10'>
        <h6 className='uppercase'>View All Testimonials</h6>
      </div>
    </div>
  )
}
