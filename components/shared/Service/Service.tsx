/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'

export function Service() {
  const { data } = useGetAllServiceQuery()

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <div className='container'>
        <div className='flex justify-between gap-6'>
          <div className='w-1/3'>
            <div className='flex flex-col border-t-[1px]'>
              {data?.data.map((service) => {
                return (
                  <div className='border-b-[1px] py-4' key={service.id}>
                    <button className='w-full hover:bg-greige p-4 rounded-full'>
                      <div className='flex justify-between items-center'>
                        <span className='text-xs'>
                          {service.attributes.title}
                        </span>
                        <img
                          src={`http://localhost:1337${service.attributes.icon.data.attributes.url}`}
                          className='text-charcoal-1000'
                          alt={service.attributes.title}
                        />
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='w-2/3'>
            <div className='border-t-[1px] border-l-[1px] rounded-tl-[40px] rounded p-8 h-full'>
              <p className='text-xs font-light'>
                Lorem ipsum dolor sit amet consectetur. Facilisis id commodo
                ultrices dignissim blandit dignissim dolor. Nisl laoreet in eget
                morbi commodo purus urna risus felis. Vulputate at blandit
                consectetur dictum gravida vel non euismod. Morbi a convallis
                massa viverra semper orci blandit vel. Nulla tellus sit tortor
                neque sollicitudin luctus. A mauris enim elit lectus sit. Mauris
                lobortis amet enim molestie amet dis. Mattis mauris id etiam
                habitant sapien ac neque quam. Pellentesque suscipit volutpat
                elit etiam sagittis nunc sapien.
              </p>
            </div>
          </div>
        </div>
        <div className='border-b-[1px] flex items-center justify-center py-12'>
          <a href='#' className='text-3xs'>
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  )
}
