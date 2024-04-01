'use client'

import { useParams } from 'next/navigation'

import { SectionHeader } from '@/components/shared/SectionHeader'
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
      <div className='container pt-28 pb-10 lg:py-28'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-10'>
          <h3 className='font-thin w-full lg:w-1/3'>
            {t('testimonials.title')}
          </h3>
          <div className='flex flex-col w-full lg:w-2/3 gap-10'>
            <h4 className='font-thin lg:pb-12'>{t('testimonials.subtitle')}</h4>
            <span className='text-xs font-thin'>
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
