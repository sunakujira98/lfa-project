/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import dayjs from 'dayjs'

import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { Link } from '@/components/shared/Link'
import { useGetArticleByIdQuery } from '@/hooks/query/useGetArticleQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type NewsDetailProps = {
  newsId: string
}

export function NewsDetail({ newsId }: NewsDetailProps) {
  const { t } = useTranslation()
  const { data, isSuccess } = useGetArticleByIdQuery(newsId)
  const { data: nextData } = useGetArticleByIdQuery(
    (Number(newsId) + 1).toString(),
  )

  return (
    isSuccess && (
      <>
        <div
          className='relative container mx-auto'
          style={{ maxWidth: '1680px' }}
        >
          <div
            className='h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_HOST}${data?.data.attributes.thumbnail?.data.attributes.url})`,
            }}
          >
            <div className='flex flex-col h-screen'>
              <div className='flex-1'></div>
              <div className='self-start px-20 py-10 ml-auto text-lfaWhite'>
                <h1>{data.data.attributes.title}</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-20'>
            <div className='max-w-screen-xl mx-auto py-20'>
              {dayjs(data.data.attributes.createdAt).format('DD-MM-YYYY')}

              <ContentRenderer data={data.data.attributes.content as any} />
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          <div className='container'>
            <div className='flex flex-col'>
              <div className='border-t-[1px]'></div>
              <div className='flex justify-between py-5'>
                <Link href='/news'>
                  <h6>{t('news.allNews')}</h6>
                </Link>
                {nextData && (
                  <Link href={`/news/${Number(newsId) + 1}`}>
                    <h6>
                      {t('news.nextPage', {
                        title: nextData.data.attributes.title,
                      })}
                    </h6>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}
