/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllClientQuery } from '@/hooks/query/useClientQuery'

export function Clients() {
  const { data, isSuccess } = useGetAllClientQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10 px-4'>
        <div className='border-y-[1px] border-charcoal-100 py-10'>
          <h6 className='font-neue text-gray-50'>CLIENTELE</h6>
          <div className='relative flex overflow-x-hidden'>
            <div className='flex flex-row items-center px-6 animate-marquee whitespace-nowrap'>
              {data?.data?.map((client) => {
                return (
                  <div className='py-4 px-6 w-44' key={client.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      alt={client.attributes.clientName}
                    />
                  </div>
                )
              })}
            </div>
            <div className='absolute top-0 flex flex-row items-center animate-marquee2 whitespace-nowrap'>
              {data?.data?.map((client) => {
                return (
                  <div
                    className='py-4 px-6 w-44'
                    key={`client-2nd-marquee-${client.id}`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${client.attributes.image.data.attributes.url}`}
                      alt={client.attributes.clientName}
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
