'use client'

import { ServiceWithImage } from '@/components/shared/ServiceWithImage'
import { SideBySideTestimonial } from '@/components/shared/SideBySideTestimonial'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'

export function TestimonialSection() {
  const { isSuccess, data } = useGetAllTestimonialQuery()

  return (
    <>
      <div className='container py-28'>
        <div className='flex justify-between gap-40'>
          <h3 className='font-thin'>Testimonials</h3>
          <div className='flex flex-col'>
            <h4 className='font-thin' style={{ paddingBottom: '50px' }}>
              Our clients' stories reveal how we craft award-winning office
              designs, blending the best office interior design principles with
              innovative corporate interior design in Singapore.
            </h4>
            <span className='text-xs font-thin'>
              Discover the transformative power of LFA Studio, a leader among
              commercial interior design firms in Singapore. Dive into
              testimonials that showcase our expertise in office renovation in
              Singapore, where every commercial office renovation project
              reflects a unique journey. From the finesse of office interior
              renovation in Singapore to the broader scope of commercial
              interior design, our work is a testament to our commitment to
              excellence in workplace design in Singapore. Experience how we
              turn visions into reality, creating personalised spaces that
              resonate with the spirit of corporate office interior design and
              interior design for commercial spaces, one project at a time.
            </span>
          </div>
        </div>
      </div>
      {isSuccess && (
        <div className='container'>
          <div className='flex flex-col'>
            {data.data.map((testimonial) => {
              return <SideBySideTestimonial testimonial={testimonial} />
            })}
          </div>
        </div>
      )}
    </>
  )
}
