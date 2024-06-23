/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Link } from '@/components/shared/Link'
import { StrapiComponentResolver } from '@/components/shared/StrapiComponentResolver'
import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { Project } from '@/domain/types/project.types'
import {
  useGetAllProjectQueryMinimal,
  useGetProjectByIdQuery,
} from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type ProjectDetailProps = {
  projectId: string
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [nextData, setNextData] = useState<Project | undefined>(undefined)
  const { data, isSuccess } = useGetProjectByIdQuery(projectId, lang)
  const { data: allProjects, isSuccess: isSuccessAllProjects } =
    useGetAllProjectQueryMinimal(lang)

  useEffect(() => {
    if (isSuccessAllProjects) {
      const nextDataIndex = allProjects?.data.findIndex((project) => {
        return project.id === parseInt(projectId)
      })

      const fetchedNextData =
        nextDataIndex !== undefined
          ? allProjects?.data[nextDataIndex + 1]
          : undefined

      setNextData(fetchedNextData)
    }
  }, [allProjects, isSuccessAllProjects, projectId])

  const params = new URLSearchParams()
  const industryId =
    data?.data?.attributes.locale === lang
      ? data?.data?.attributes.industry?.data?.id
      : undefined
  const industryName = data?.data?.attributes.industry?.data?.attributes.name

  if (industryId) {
    params.append('industry', industryId.toString())
  }

  const background = `${process.env.NEXT_PUBLIC_CMS_HOST}${data?.data?.attributes?.thumbnail?.data?.attributes?.url}`

  return (
    isSuccess &&
    isSuccessAllProjects && (
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
            <h6 className='neue-wide pt-4 lg:pt-4'>
              {data?.data.attributes.location}
            </h6>
            <div className='grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:gap-20 pt-10 pb-6 lg:pb-0'>
              {/* <div className='flex flex-col gap-2'>
                <h6 className='neue-wide uppercase'>Industry</h6>
                <Link
                  href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                >
                  <h6 className='neue-wide-light underline !normal-case'>
                    {data.data.attributes.industry?.data?.attributes.name}
                  </h6>
                </Link>
              </div> */}
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
              {/* <div className='flex flex-col gap-2'>
                <h6 className='neue-wide'>INDUSTRY</h6>
                <Link
                  href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                >
                  <h6 className='neue-wide-light underline !normal-case'>
                    {data.data.attributes.industry?.data?.attributes.name}
                  </h6>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        {data?.data.attributes.awards.data.length > 0 && (
          <div className='bg-charcoal-1000 mb-5 px-4 lg:px-0'>
            <div className='max-w-screen-xl mx-auto py-10'>
              <span className='text-lfaWhite neue-wide'>
                {t('awards.title')}
              </span>
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
        )}
        <StrapiComponentResolver detail={data.data.attributes.detail} />
        <div className='max-w-screen-xl mx-auto px-4 lg:px-0 mt-10'>
          <div className='hidden flex-col lg:flex'>
            <div className='border-t-[1px]'></div>
            <div className='flex justify-between py-6'>
              <Link href='/projects'>
                <h6 className='neue-wide'>
                  {t('featuredProject.allProjects')}
                </h6>
              </Link>
              <Link href={`/projects?${params}`}>
                <h6 className='neue-wide'>
                  {industryName}&nbsp;{t('header.projects')}
                </h6>
              </Link>
              {nextData && (
                <Link href={`/projects/${nextData.id}`}>
                  <h6 className='neue-wide'>
                    {t('news.nextProject', {
                      title: nextData.attributes.title,
                    })}
                  </h6>
                </Link>
              )}
            </div>
          </div>
          <div className='flex flex-col lg:hidden'>
            <div className='border-t-[1px]'></div>
            <Link href='/project'>
              <div className='flex flex-row justify-between py-4'>
                <div className='flex w-full justify-between text-xs items-center'>
                  <h6 className='neue-wide uppercase'>
                    {t('featuredProject.allProjects')}
                  </h6>
                  <ArrowRightUpIcon />
                </div>
              </div>
            </Link>
            <Link href={`/projects?${params}`}>
              <div className='flex flex-row justify-between py-4 border-t-[1px]'>
                <div className='flex w-full justify-between text-xs items-center'>
                  <h6 className='neue-wide'>
                    {industryName}&nbsp;{t('header.projects')}
                  </h6>
                  <ArrowRightUpIcon />
                </div>
              </div>
            </Link>
            {nextData && (
              <Link href={`/projects/${nextData.id}`}>
                <div className='flex justify-between items-center py-4 border-t-[1px]'>
                  <h6 className='neue-wide uppercase'>
                    {t('news.nextProject', {
                      title: nextData.attributes.title,
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
