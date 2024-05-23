/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllClientQuery } from '@/hooks/query/useClientQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function Clients() {
  const { t } = useTranslation()
  const { data, isSuccess } = useGetAllClientQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10 lg:py-9 px-4 lg:px-0'>
        <div className='border-y-[1px] border-charcoal-100 py-10 lg:py-9'>
          <h6 className='font-neue text-gray-50 leading-4 tracking-[1px] font-normal'>
            {t('client.title')}
          </h6>
          <div className='relative flex overflow-x-hidden'>
            <div className='flex flex-row items-center px-9 animate-marquee whitespace-nowrap'>
              {[...data?.data, ...data?.data, ...data?.data].map((client) => {
                return (
                  <div className='py-4 px-8 w-48' key={client.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      alt={client.attributes.clientName}
                      className='h-8'
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
