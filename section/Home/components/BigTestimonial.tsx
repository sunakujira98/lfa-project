'use client'

import { Link } from '@/components/shared/Link'
import { Testimonial } from '@/components/shared/Testimonial'
import { StrapiResponse } from '@/domain/types/common.types'
import { Testimonial as TTestimonial } from '@/domain/types/testimonial.types'
import { useGetAllTestimonialQuery } from '@/hooks/query/useTestimonialQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { useParams } from 'next/navigation'

type BigTestimonialProps = {
  hideLogo?: boolean
}

export function BigTestimonial({ hideLogo }: BigTestimonialProps) {
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
    <div className='max-w-screen-xl mx-auto py-10 px-4 lg:px-0'>
      <div className='container'>
        <div className='pb-10 lg:pb-0'>
          <span className='neue-wide'>{t('testimonials.title')}</span>
        </div>
      </div>
      {isSuccess &&
        testimonials.map((testimonial) => {
          return (
            <div className='pb-10 lg:p-0' key={testimonial.id}>
              <Testimonial data={testimonial} hideLogo={hideLogo} />
            </div>
          )
        })}
      <div className='flex items-center justify-center lg:py-10'>
        <Link href='/testimonials'>
          <h6 className='neue-wide'>{t('testimonials.allTestimonials')}</h6>
        </Link>
      </div>
    </div>
  )
}
