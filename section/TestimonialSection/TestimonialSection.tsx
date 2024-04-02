'use client'

import { useParams } from 'next/navigation'

import { SideBySideTestimonial } from '@/components/shared/SideBySideTestimonial'
import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { StrapiResponse } from '@/domain/types/common.types'

export function TestimonialSection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { isSuccess, data } = useGetAllTestimonialQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TTestimonial>

  const testimonials = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  return (
    <>
      <div className='container pt-28 pb-10 lg:pt-28 lg:pb-20'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-10'>
          <h3 className='vinila-tight w-full lg:w-[30%]'>
            {t('testimonials.title')}
          </h3>
          <div className='flex flex-col w-full lg:w-[70%] gap-10'>
            <h4 className='neue-wider lg:pb-12'>
              {t('testimonials.subtitle')}
            </h4>
            <span className='neue-normal text-justify'>
              {t('testimonials.description')}
            </span>
          </div>
        </div>
      </div>
      {isSuccess && (
        <div className='flex flex-col'>
          {testimonials.map((testimonial) => {
            return <SideBySideTestimonial testimonial={testimonial} />
          })}
        </div>
      )}
    </>
  )
}
