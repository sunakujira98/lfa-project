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
      <div className='container pt-28 pb-10 md:py-28'>
        <SectionHeader
          displayName={t('testimonials.title')}
          title={t('testimonials.subtitle')}
          subtitle={t('testimonials.description')}
        />
      </div>
      {isSuccess && (
        <div className='container'>
          <div className='flex flex-col'>
            {testimonials.map((testimonial) => {
              return <SideBySideTestimonial testimonial={testimonial} />
            })}
          </div>
        </div>
      )}
    </>
  )
}
