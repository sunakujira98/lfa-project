'use client'

import { Testimonial } from '@/components/shared/Testimonial'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'

export function BigTestimonial() {
  const { data, isSuccess } = useGetAllTestimonialQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10'>
        <div className='container'>
          <div className='pb-10'>
            <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
              Testimonials
            </span>
          </div>
        </div>
        {data.data.map((testimonial) => {
          return <Testimonial data={testimonial} key={testimonial.id} />
        })}
      </div>
    )
  )
}
