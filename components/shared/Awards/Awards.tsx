'use client'
import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'

export function Awards() {
  const { data } = useGetAllAwardQuery()

  return (
    <div className='max-w-full mx-auto py-10 px-20 bg-charcoal-1000 h-40'>
      <div className='container max-w-screen-xl'>
        <div className=''>
          <span className='font-neue text-3xs uppercase text-lfaWhite tracking-wider'>
            Awards
          </span>
        </div>
        <div className='relative flex overflow-x-hidden'>
          <div className='flex flex-row gap-24 animate-marquee whitespace-nowrap'>
            {data?.data.map((client) => {
              return (
                <div className=''>
                  <img
                    src={`http://localhost:1337${client.attributes.image.data.attributes.url}`}
                    className='max-w-20'
                  />
                </div>
              )
            })}
          </div>
          <div className='px-8 absolute top-0 flex flex-row gap-24 animate-marquee2 whitespace-nowrap'>
            {data?.data.map((client) => {
              return (
                <div className=''>
                  <img
                    src={`http://localhost:1337${client.attributes.image.data.attributes.url}`}
                    className='max-w-20'
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
