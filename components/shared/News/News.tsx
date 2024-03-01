/* eslint-disable @next/next/no-img-element */

'use client'

import { News as TNews } from '@/domain/types/article.types'
import dayjs from 'dayjs'

type NewsProps = {
  news: TNews
}

export function News({ news }: NewsProps) {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='container pt-10'>
      <div className='grid grid-cols-1 gap-20'>
        <div className='flex flex-row gap-6' key={news.id}>
          <img
            src={`http://localhost:1337${news.attributes.thumbnail.data.attributes.url}`}
            className='max-w-96 h-64'
            alt={news.attributes.title}
          />
        </div>
      </div>
      <div className='flex flex-col py-6 text-3xs gap-2'>
        <a href={`/news/${news.id}`}>
          <h4 className='font-light'>{news.attributes.title}</h4>
        </a>
        <span className='text-3xs'>
          {dayjs(news.attributes.createdAt).format('DD-MM-YYYY')}
        </span>
        <span className='text-3xs'>
          {news.attributes.shortDescription &&
            truncateString(news.attributes.shortDescription, 40)}
        </span>
      </div>
    </div>
  )
}
