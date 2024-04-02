/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'

import { Link } from '@/components/shared/Link'
import { StrapiComponentResolver } from '@/components/shared/StrapiComponentResolver'
import { useGetProjectByIdQuery } from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type ProjectDetailProps = {
  projectId: string
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { t } = useTranslation()
  const { data, isSuccess } = useGetProjectByIdQuery(projectId)

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
        >
          {' '}
          <div
            className='absolute inset-0 bg-charcoal-1000 opacity-50'
            style={{
              mixBlendMode: 'multiply',
            }}
          ></div>
        </div>
        <div className='flex flex-col h-screen max-w-screen-xl mx-auto relative z-2'>
          <div className='flex-1'></div>
          <div className='self-start lg:py-10 text-lfaWhite flex flex-col w-full px-4 lg:px-0'>
            <h1 className='w-[50%] content-title'>
              {data?.data.attributes.title}
            </h1>
            <h6 className='neue-wide pt-4 lg:pt-0'>
              {data?.data.attributes.location}
            </h6>
            <div className='grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-20 pt-10 pb-6 lg:pb-0'>
              <div className='flex flex-col gap-2'>
                <h6 className='neue-wide uppercase'>Industry</h6>
                <Link
                  href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                >
                  <h6 className='neue-wide-light underline !normal-case'>
                    {data.data.attributes.industry?.data?.attributes.name}
                  </h6>
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
                <h6 className='neue-wide uppercase'>Services</h6>
                <Link
                  href={`/projects?service=${data.data.attributes.service?.data?.id}`}
                >
                  <h6 className='neue-wide-light underline !normal-case'>
                    {data.data.attributes.service?.data?.attributes.title}
                  </h6>
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
                <h6 className='neue-wide'>COMPLETION YEAR</h6>
                <h6 className='neue-wide-light underline !normal-case'>
                  {dayjs(data.data.attributes.completionDate).format('YYYY')}
                </h6>
              </div>
              <div className='flex flex-col gap-2'>
                <h6 className='neue-wide'>INDUSTRY</h6>
                <Link
                  href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                >
                  <h6 className='neue-wide-light underline !normal-case'>
                    {data.data.attributes.industry?.data?.attributes.name}
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-charcoal-1000 mb-5 px-4 lg:px-0'>
          <div className='max-w-screen-xl mx-auto py-10'>
            <span className='text-lfaWhite neue-wide'>{t('awards.title')}</span>
            <div className='flex justify-between whitespace-nowrap'>
              {data?.data.attributes.awards.data.map((award) => {
                return (
                  <div className='py-4' key={award.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${award.attributes.image.data.attributes.url}`}
                      className='max-w-20'
                      alt={award.attributes.awardName}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <StrapiComponentResolver detail={data.data.attributes.detail} />
      </>
    )
  )
}
