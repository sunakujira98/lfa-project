/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import { useParams } from 'next/navigation'

import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function SideBySideNews() {
  const { t } = useTranslation()
  const { lang } = useParams()

  const { isSuccess, data } = useGetAllArticleQuery(
    {
      pagination: {
        limit: 3,
      },
      sort: {
        0: { createdAt: 'desc' },
      },
    },
    lang,
  )

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<Article>

  const articles = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto pt-10 px-4 lg:px-0'>
        <div className='container pb-8'>
          <h6 className='neue-wide'>{t('news.title')}</h6>
        </div>
        <div className='lg:border-y-[1px] border-charcoal-1000 pt-4'>
          <div className='grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-3'>
            {articles.map((news) => {
              const newsId = news.localeId || news.id

              return (
                <div className='flex flex-col lg:flex-row gap-6' key={news.id}>
                  <a href={`${lang}/news/${newsId}`}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.thumbnail?.data?.attributes?.url}`}
                      className='h-full w-full object-cover object-center lg:w-36 lg:h-36 lg:aspect-square'
                      alt={news.attributes.title}
                    />
                  </a>
                  <div className='flex flex-col gap-2'>
                    <div className='neue-wide'>
                      {dayjs(news.attributes.createdAt).format('DD MMM YYYY')}
                    </div>
                    <a href={`${lang}/news/${newsId}`}>
                      <span className='neue-normal'>
                        {news.attributes.title}
                      </span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex items-center justify-center py-10 border-b-[1px] lg:border-none'>
            <a href='/news'>
              <h6 className='neue-wide'>{t('news.allNews')}</h6>
            </a>
          </div>
        </div>
      </div>
    )
  )
}
