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
          <h6 className='text-lfaWhite neue-wide'>{t('awards.title')}</h6>
          <div className='relative flex overflow-x-hidden'>
            <div className='hidden lg:flex flex-row gap-24 animate-marquee whitespace-nowrap'>
              {[...data?.data, ...data?.data, ...data?.data].map(
                (client, index) => {
                  return (
                    <div className='pt-4' key={`client-marquee-${index}`}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                        className='h-8 lg:h-12'
                        alt={client.attributes.awardName}
                      />
                    </div>
                  )
                },
              )}
            </div>
            <div className='flex lg:hidden flex-row gap-24 animate-marquee2 whitespace-nowrap'>
              {[...data?.data].map((client, index) => {
                return (
                  <div className='pt-4' key={`client-marquee-${index}`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      className='h-12'
                      alt={client.attributes.awardName}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  )
}
