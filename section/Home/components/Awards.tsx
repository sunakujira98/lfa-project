/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function Awards() {
  const { t } = useTranslation()
  const { data, isSuccess } = useGetAllAwardQuery()

  return (
    isSuccess && (
      <div className='bg-charcoal-1000'>
        <div className='max-w-screen-xl mx-auto py-10 lg:py-9 px-4 lg:px-0'>
          <h6 className='text-lfaWhite neue-wide mb-4'>{t('awards.title')}</h6>
          <div className='relative flex overflow-x-hidden'>
            <div className='marquee'>
              <div className='marquee-content'>
                {[
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                  ...data?.data,
                ].map((client) => {
                  return (
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      alt={client.attributes.awardName}
                      className='h-8 px-8'
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
