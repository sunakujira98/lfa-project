/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import dayjs from 'dayjs'

import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { useGetArticleByIdQuery } from '@/hooks/query/useGetArticleQuery'

type NewsDetailProps = {
  newsId: string
}

export function NewsDetail({ newsId }: NewsDetailProps) {
  const { data, isSuccess } = useGetArticleByIdQuery(newsId)

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
          <div className='container'>
            {dayjs(data.data.attributes.createdAt).format('DD-MM-YYYY')}
          </div>
        </div>
        <ContentRenderer data={data.data.attributes.content as any} />
        <div className='max-w-screen-xl mx-auto'>
          <div className='container'>
            <div className='flex flex-col'>
              <div className='border-t-[1px]'></div>
              <div className='flex justify-between py-5'>
                <div>a</div>
                <div>a</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}
