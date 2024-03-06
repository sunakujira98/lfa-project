/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'

import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'

export function SideBySideNews() {
  const { isSuccess, data } = useGetAllArticleQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
        <div className='container pb-8'>
          <span className='font-neue text-3xs text-gray-50'>NEWS</span>
        </div>
        <div className='container md:border-y-[1px] pt-10'>
          <div className='grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-3'>
            {data?.data?.map((news) => {
              return (
                <div className='flex flex-col md:flex-row gap-6' key={news.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.thumbnail?.data.attributes.url}`}
                    className='w-full md:max-w-36 md:max-h-36 md:aspect-square'
                    alt={news.attributes.title}
                  />
                  <div className='flex flex-col gap-2'>
                    <span className='text-3xs font-thin'>
                      {dayjs(news.attributes.createdAt).format('DD-MM-YYYY')}
                    </span>
                    <span className='text-xs font-thin'>
                      {news.attributes.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex items-center justify-center py-10 text-3xs border-b-[1px] md:border-none'>
            VIEW ALL NEWS
          </div>
        </div>
      </div>
    )
  )
}
