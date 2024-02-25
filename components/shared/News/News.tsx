/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'

export function News() {
  const { data } = useGetAllArticleQuery()

  return (
    <div className='max-w-screen-xl mx-auto pt-10'>
      <div className='container pb-8'>
        <span className='font-neue text-3xs text-gray-50'>NEWS</span>
      </div>
      <div className='container border-y-[1px] pt-10'>
        <div className='grid grid-cols-1 gap-20 md:grid-cols-3'>
          {data?.data.map((news) => {
            return (
              <div className='flex flex-row gap-6' key={news.id}>
                <img
                  src={`http://localhost:1337${news.attributes.thumbnail.data.attributes.url}`}
                  className='max-w-36 max-h-36 aspect-square'
                  alt={news.attributes.title}
                />
                <div className='flex flex-col gap-2'>
                  <span className='text-3xs'>
                    {dayjs(news.attributes.createdAt).format('DD-MM-YYYY')}
                  </span>
                  <span className='text-xs'>{news.attributes.title}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex items-center justify-center py-10 text-3xs'>
          VIEW ALL NEWS
        </div>
      </div>
    </div>
  )
}
