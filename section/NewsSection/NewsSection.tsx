'use client'

import { News } from '@/components/shared/News'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { useParams } from 'next/navigation'

export function NewsSection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { isSuccess, data } = useGetAllArticleQuery()

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
    <>
      <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
        <SectionHeader
          displayName={t('news.title')}
          title={t('news.subtitle')}
          subtitle={t('news.description')}
        />
      </div>
      {isSuccess && (
        <div className='container border-t-[1px] px-4 md:px-0'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6'>
            {articles.map((news) => {
              const localeId = news.localeId || news.id

              return <News news={news} localeId={localeId} />
            })}
          </div>
        </div>
      )}
    </>
  )
}
