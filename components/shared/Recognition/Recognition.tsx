/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'

import { useGetAllRecognitionQuery } from '@/hooks/query/useGetAllRecognitionQuery'

export function Recognition() {
  const { data } = useGetAllRecognitionQuery()

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <div className='container pb-8'>
        <span className='font-neue text-3xs text-gray-50'>RECOGNITIONS</span>
      </div>
      <div className='container'>
        <div className='flex flex-row gap-20'>
          {data?.data.map((news) => {
            return (
              <div className='flex flex-col items-center gap-6' key={news.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.image.data.attributes.url}`}
                  className='max-w-64'
                  alt={news.attributes.title}
                />
                <div className='flex flex-col gap-2'>
                  <span className='text-3xs uppercase'>
                    <span className='text-3xs uppercase'>
                      {news.attributes.title} &nbsp;
                    </span>
                    {dayjs(news.attributes.createdAt).format('DD MMM YYYY')}
                  </span>
                  <span className='text-xs'>{news.attributes.description}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
