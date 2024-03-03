/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'

export function Awards() {
  const { data, isSuccess } = useGetAllAwardQuery()

  return (
    isSuccess && (
      <div className='bg-charcoal-1000'>
        <div className='max-w-screen-xl mx-auto py-10'>
          <span className='font-neue text-3xs text-gray-50'>CLIENTELE</span>
          <div className='relative flex overflow-x-hidden'>
            <div className='flex flex-row gap-24 animate-marquee whitespace-nowrap'>
              {data?.data?.map((client) => {
                return (
                  <div className='py-4' key={client.id}>
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
                  <div className='py-4' key={`client-2nd-marquee-${client.id}`}>
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
