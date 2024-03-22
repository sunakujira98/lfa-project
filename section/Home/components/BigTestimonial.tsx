'use client'

import { Testimonial } from '@/components/shared/Testimonial'
import { StrapiResponse } from '@/domain/types/common.types'
import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { useParams } from 'next/navigation'

export function BigTestimonial() {
  const { t } = useTranslation()
  const { lang } = useParams()
  const { data, isSuccess } = useGetAllTestimonialQuery()

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
    <div className='max-w-screen-xl mx-auto py-10 px-4 md:px-0'>
      <div className='container'>
        <div className='pb-10 md:pb-0'>
          <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
            {t('testimonials.title')}
          </span>
        </div>
      </div>
      {isSuccess &&
        testimonials.map((testimonial) => {
          return (
            <div className='pb-10 md:p-0' key={testimonial.id}>
              <Testimonial data={testimonial} />
            </div>
          )
        })}
      <div className='flex items-center justify-center md:py-10'>
        <h6 className='uppercase'>{t('testimonials.allTestimonials')}</h6>
      </div>
    </div>
  )
}
