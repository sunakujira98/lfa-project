'use client'

import { useGetAllClientQuery } from '@/hooks/query/useClientQuery'

export function Clients() {
  const { data } = useGetAllClientQuery()

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <div className='border-y-[1px] border-charcoal-100 py-9'>
        <span className='font-neue text-3xs text-gray-50'>CLIENTELE</span>
        <div className='relative flex overflow-x-hidden'>
          <div className='flex flex-row gap-24 animate-marquee whitespace-nowrap'>
            {data?.data.map((client) => {
              return (
                <div className='py-4' key={client.id}>
                  <img
                    src={`http://localhost:1337${client.attributes.image.data.attributes.url}`}
                  />
                </div>
              )
            })}
          </div>
          <div className='px-24 absolute top-0 flex flex-row gap-24 animate-marquee2 whitespace-nowrap'>
            {data?.data.map((client) => {
              return (
                <div className='py-4' key={`client-2nd-marquee-${id}`}>
                  <img
                    src={`http://localhost:1337${client.attributes.image.data.attributes.url}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
