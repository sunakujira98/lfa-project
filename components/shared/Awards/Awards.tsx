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
        <div className='max-w-screen-xl mx-auto py-10 md:py-10 px-4 md:px-0'>
          <h6 className='font-neue text-gray-50'>{t('awards.title')}</h6>
          <div className='relative flex overflow-x-hidden'>
            <div className='flex flex-row gap-24 animate-marquee whitespace-nowrap'>
              {data?.data?.map((client) => {
                return (
                  <div className='pt-4 md:py-4' key={client.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      className='max-w-20'
                      alt={client.attributes.awardName}
                    />
                  </div>
                )
              })}
            </div>
            <div className='px-8 absolute top-0 flex flex-row gap-24 animate-marquee2 whitespace-nowrap'>
              {data?.data?.map((client) => {
                return (
                  <div
                    className='pt-4 md:py-4'
                    key={`client-2nd-marquee-${client.id}`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      className='max-w-20'
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
