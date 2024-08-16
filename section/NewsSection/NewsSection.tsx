'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useLanguage } from '@/components/Provider'
import { News } from '@/components/shared/News'
import { ScreenSpinner } from '@/components/shared/ScreenSpinner'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { useGetInfiniteArticleQuery } from '@/hooks/query/useGetArticleQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function NewsSection() {
  const { ref, inView } = useInView()

  const { lang } = useLanguage()
  const { t } = useTranslation()
  const {
    isSuccess,
    data,
    isLoading,
    fetchNextPage,
    error,
    isFetchingNextPage,
  } = useGetInfiniteArticleQuery(
    {
      sort: {
        0: { order: 'asc' },
      },
      limit: 6,
    },
    lang,
  )

  useEffect(() => {
    if (inView && !isLoading && !error) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isLoading, error])

  return (
    <>
      <div className='container pt-28 pb-10 lg:pt-28 lg:pb-20 px-4 lg:px-0'>
        <SectionHeader
          displayName={t('news.title')}
          title={t('news.subtitle')}
          subtitle={t('news.description')}
        />
      </div>
      {isSuccess && (
        <div className='px-4'>
          <div className='border-t-[1px] border-charcoal-100 lg:px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 pt-10'>
              {data?.pages?.flatMap((articles) => {
                const localizedData = findTranslatedData(
                  lang as string,
                  articles,
                ) as StrapiResponse<Article>

                const article = isSuccess
                  ? localizedData.data.length > 0
                    ? localizedData.data
                    : data?.pages?.[0].data
                  : []

                return article.map((singleArticle) => {
                  const localeId =
                    singleArticle.attributes.slug ||
                    singleArticle.localeId ||
                    singleArticle.id

                  return (
                    <News
                      key={singleArticle.id}
                      news={singleArticle}
                      localeId={localeId}
                    />
                  )
                })
              })}
            </div>
          </div>
        </div>
      )}
      <div ref={ref} />
      {isFetchingNextPage && <ScreenSpinner />}
    </>
  )
}
