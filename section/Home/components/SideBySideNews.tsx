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

  const { isSuccess, data } = useGetAllArticleQuery({
    pagination: {
      limit: 3,
    },
    sort: {
      0: { createdAt: 'desc' },
    },
  })

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
      <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
        <div className='container pb-8'>
          <h6 className='font-neue text-3xs text-gray-50 uppercase'>
            {t('news.title')}
          </h6>
        </div>
        <div className='container md:border-y-[1px] border-charcoal-1000 pt-4'>
          <div className='grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-3'>
            {articles.map((news) => {
              const newsId = news.localeId || news.id

              return (
                <div className='flex flex-col md:flex-row gap-6' key={news.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.thumbnail?.data.attributes.url}`}
                    className='w-full md:max-w-36 md:max-h-36 md:aspect-square'
                    alt={news.attributes.title}
                  />
                  <div className='flex flex-col gap-2'>
                    <h6>
                      {dayjs(news.attributes.createdAt).format('DD-MM-YYYY')}
                    </h6>
                    <a href={`${lang}/news/${newsId}`}>
                      <span className='text-xs font-thin'>
                        {news.attributes.title}
                      </span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex items-center justify-center py-10 border-b-[1px] md:border-none'>
            <a href='/news'>
              <h6 className='uppercase'>{t('news.allNews')}</h6>
            </a>
          </div>
        </div>
      </div>
    )
  )
}
