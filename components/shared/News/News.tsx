/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'

import { Article as TNews } from '@/domain/types/article.types'

import { Link } from '../Link'

type NewsProps = {
  news: TNews
  localeId: number
}

export function News({ news, localeId }: NewsProps) {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...'
    } else {
      return str
    }
  }

  return (
    <div className='pb-6'>
      <div className='grid grid-cols-1 gap-20'>
        <div className='flex flex-row gap-6' key={news.id}>
          <Link href={`/news/${localeId}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.thumbnail?.data.attributes.url}`}
              className='w-full lg:max-w-96 h-[246px]'
              alt={news.attributes.title}
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-col py-4 lg:pt-6 text-3xs gap-2'>
        <Link href={`/news/${localeId}`}>
          <h4 className='neue-wider'>{news.attributes.title}</h4>
        </Link>
        <span className='neue-wide'>
          {dayjs(news.attributes.createdAt).format('DD MMM YYYY')}
        </span>
        <span className='neue-normal'>
          {news.attributes.shortDescription &&
            truncateString(news.attributes.shortDescription, 40)}
        </span>
      </div>
    </div>
  )
}
