/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import dayjs from 'dayjs'
import { useParams } from 'next/navigation'

import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { Link } from '@/components/shared/Link'
import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { useGetArticleByIdQuery } from '@/hooks/query/useGetArticleQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type NewsDetailProps = {
  newsId: string
}

export function NewsDetail({ newsId }: NewsDetailProps) {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { data, isSuccess } = useGetArticleByIdQuery(newsId)
  const { data: nextData } = useGetArticleByIdQuery(
    (Number(newsId) + 1).toString(),
  )

  const nextNewsId =
    nextData?.data?.attributes.locale === lang ? nextData?.data?.id : undefined
  const background = `${process.env.NEXT_PUBLIC_CMS_HOST}${data?.data?.attributes?.thumbnail?.data?.attributes?.url}`

  return (
    isSuccess && (
      <>
        <div
          className='h-screen flex pt-6 lg:pt-0 lg:items-center bg-cover bg-center absolute inset-0'
          style={{
            backgroundImage: `url('${background}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='flex flex-col h-screen max-w-screen-xl mx-auto relative z-2 lg:px-0'>
          <div className='flex-1'></div>
          <div className='self-start px-4 lg:px-2 py-10 text-lfaWhite flex flex-col w-full'>
            <h1 className='content-title'>{data.data.attributes.title}</h1>
          </div>
        </div>

        <div className='flex flex-col gap-20'>
          <div className='max-w-screen-xl mx-auto py-10 lg:py-20'>
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/3'></div>
              <div className='w-full lg:w-2/3 px-4 lg:px-0'>
                <div className='pb-20 neue-wide'>
                  {dayjs(data.data.attributes.createdAt).format('DD MMM YYYY')}
                </div>

                <ContentRenderer data={data.data.attributes.content as any} />
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto px-4 lg:px-0'>
          <div className='hidden flex-col lg:flex'>
            <div className='border-t-[1px]'></div>
            <div className='flex justify-between py-5'>
              <Link href='/news'>
                <h6 className='neue-wide'>{t('news.allNewsFooter')}</h6>
              </Link>
              {nextData && nextNewsId && (
                <Link href={`/news/${Number(newsId) + 1}`}>
                  <h6 className='neue-wide'>
                    {t('news.nextPage', {
                      title: nextData.data.attributes.title,
                    })}
                  </h6>
                </Link>
              )}
            </div>
          </div>
          <div className='flex flex-col lg:hidden'>
            <div className='border-t-[1px]'></div>
            <Link href='/news'>
              <div className='flex flex-row justify-between py-4'>
                <div className='flex w-full justify-between text-xs items-center border-charcoal-100'>
                  <h6 className='neue-wide uppercase'>
                    {t('news.allNewsFooter')}
                  </h6>
                  <ArrowRightUpIcon />
                </div>
              </div>
            </Link>
            {nextData && nextNewsId && (
              <Link href={`/news/${Number(newsId) + 1}`}>
                <div className='flex justify-between items-center py-4 border-t-[1px]'>
                  <h6 className='neue-wide uppercase'>
                    {t('news.nextPage', {
                      title: nextData.data.attributes.title,
                    })}
                  </h6>
                  <ArrowRightUpIcon />
                </div>
              </Link>
            )}
          </div>
        </div>
      </>
    )
  )
}
