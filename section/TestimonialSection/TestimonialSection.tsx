'use client'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { ServiceWithImage } from '@/components/shared/ServiceWithImage'
import { SideBySideTestimonial } from '@/components/shared/SideBySideTestimonial'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'

export function TestimonialSection() {
  const { isSuccess, data } = useGetAllTestimonialQuery()

  return (
    <>
      <div className='container pt-28 pb-10 md:py-28'>
        <SectionHeader
          displayName='Testimonials'
          title="Our clients' stories reveal how we craft award-winning office
              designs, blending the best office interior design principles with
              innovative corporate interior design in Singapore."
          subtitle='Discover the transformative power of LFA Studio, a leader among
              commercial interior design firms in Singapore. Dive into
              testimonials that showcase our expertise in office renovation in
              Singapore, where every commercial office renovation project
              reflects a unique journey. From the finesse of office interior
              renovation in Singapore to the broader scope of commercial
              interior design, our work is a testament to our commitment to
              excellence in workplace design in Singapore. Experience how we
              turn visions into reality, creating personalised spaces that
              resonate with the spirit of corporate office interior design and
              interior design for commercial spaces, one project at a time.'
        />
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
