'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Link } from '@/components/shared/Link'
import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'
import { useGetAllProjectQueryWithoutInfinite } from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function SitemapSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(
    undefined,
  )

  const [hoveredNewsIndex, setHoveredNewsIndex] = useState<number | undefined>(
    undefined,
  )

  const [hoverPage, setHoverPage] = useState<number | undefined>(undefined)

  const onHover = (index: number) => {
    setHoveredIndex(index)
  }

  const onLeave = () => {
    setHoveredIndex(undefined)
  }

  const onHoverNews = (index: number) => {
    setHoveredNewsIndex(index)
  }

  const onLeaveNews = () => {
    setHoveredNewsIndex(undefined)
  }

  const onHoverPage = (index: number) => {
    setHoverPage(index)
  }

  const onLeavePage = () => {
    setHoverPage(undefined)
  }

  const { lang } = useParams()
  const { t } = useTranslation()

  const { data: projects, isSuccess: isSuccessProjects } =
    useGetAllProjectQueryWithoutInfinite({ limit: 6 })
  const { data: news, isSuccess: isSuccessNews } = useGetAllArticleQuery()

  const localizedProjects = findTranslatedData(
    lang as string,
    projects,
  ) as StrapiResponse<Project>

  const localizedNews = findTranslatedData(
    lang as string,
    news,
  ) as StrapiResponse<Article>

  const projectsData = isSuccessProjects
    ? localizedProjects.data.length > 0
      ? localizedProjects.data
      : projects?.data
    : []

  const newsData = isSuccessNews
    ? localizedNews.data.length > 0
      ? localizedNews.data
      : projects?.data
    : []

  return (
    <div className='pt-28 pb-10 lg:py-28 px-4 lg:px-0'>
      <div className='pb-20'>
        <h3>{t('sitemap.title')}</h3>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 font-thin lg:font-normal'>
        <div>
          <div className='mb-[31px]'>
            <h6 className='neue-wide pb-6'>{t('header.projects')}</h6>
            <div className='flex flex-col'>
              {projectsData.map((project, index) => {
                const projectId = project.localeId || project.id

                if (index < 3) {
                  return (
                    <Link
                      href={`/projects/${projectId}`}
                      key={`sitemap-project-${projectId}`}
                      className='block'
                    >
                      <div
                        onMouseEnter={() => onHover(index)}
                        onMouseLeave={onLeave}
                        className={twMerge(
                          hoveredIndex === index ? 'py-5' : 'py-6',
                          'project-item flex justify-between border-t-[1px] border-charcoal-100 text-xs items-center',
                        )}
                      >
                        <span className='neue-normal-button'>
                          {project.attributes.title}
                        </span>
                        <div className='block'>
                          {hoveredIndex === index && (
                            <ArrowRightUpIcon
                              className='p-0'
                              width='32'
                              height='32'
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                }
              })}
            </div>
          </div>
          <div className='block'>
            <h6 className='neue-wide pb-6'>{t('news.title')}</h6>
            <div className='flex flex-col'>
              {newsData?.map((singleNews, index) => {
                const newsId = singleNews.localeId || singleNews.id

                if (index < 3) {
                  return (
                    <Link
                      href={`/news/${newsId}`}
                      key={`sitemap-news-${newsId}`}
                    >
                      <div
                        onMouseEnter={() => onHoverNews(index)}
                        onMouseLeave={onLeaveNews}
                        className={twMerge(
                          hoveredNewsIndex === index ? 'py-5' : 'py-6',
                          'project-item flex justify-between border-t-[1px] border-charcoal-100 text-xs items-center',
                        )}
                      >
                        <span className='neue-normal-button'>
                          {singleNews.attributes.title}
                        </span>
                        <div className='block'>
                          {hoveredNewsIndex === index && (
                            <ArrowRightUpIcon
                              className='p-0'
                              width='32'
                              height='32'
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                }
              })}
            </div>
          </div>
          <div className='block lg:hidden pt-20 lg:pt-0'>
            <h6 className='neue-wide pb-6'>{t('sitemap.pages')}</h6>
            <div className='flex flex-col'>
              <Link href={'/'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.home')}
                </div>
              </Link>
              <Link href={'/projects'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.projects')}
                </div>
              </Link>
              <Link href={'/about'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.about')}
                </div>
              </Link>
              <Link href={'/services'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.services')}
                </div>
              </Link>
              <Link href={'/testimonials'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.testimonials')}
                </div>
              </Link>
              <Link href={'/contact'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-100 py-6 text-xs items-center'>
                  {t('header.contact')}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='block'>
          <h6 className='neue-wide pb-6'>{t('sitemap.pages')}</h6>
          <div className='flex flex-col'>
            <div onMouseEnter={() => onHoverPage(0)} onMouseLeave={onLeavePage}>
              <Link href={'/'}>
                <div
                  className={twMerge(
                    hoverPage === 0 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.home')}
                  {hoverPage === 0 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
            <div onMouseEnter={() => onHoverPage(1)} onMouseLeave={onLeavePage}>
              <Link href={'/projects'}>
                <div
                  className={twMerge(
                    hoverPage === 1 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.projects')}
                  {hoverPage === 1 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
            <div onMouseEnter={() => onHoverPage(2)} onMouseLeave={onLeavePage}>
              <Link href={'/about'}>
                <div
                  className={twMerge(
                    hoverPage === 2 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.about')}
                  {hoverPage === 2 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
            <div onMouseEnter={() => onHoverPage(3)} onMouseLeave={onLeavePage}>
              <Link href={'/services'}>
                <div
                  className={twMerge(
                    hoverPage === 3 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.services')}
                  {hoverPage === 3 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
            <div onMouseEnter={() => onHoverPage(4)} onMouseLeave={onLeavePage}>
              <Link href={'/testimonials'}>
                <div
                  className={twMerge(
                    hoverPage === 4 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.testimonials')}
                  {hoverPage === 4 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
            <div onMouseEnter={() => onHoverPage(5)} onMouseLeave={onLeavePage}>
              <Link href={'/contact'}>
                <div
                  className={twMerge(
                    hoverPage === 5 ? 'py-5' : 'py-6',
                    'project-item flex justify-between border-t-[1px] border-charcoal-100 neue-normal-button items-center',
                  )}
                >
                  {t('header.contact')}
                  {hoverPage === 5 && (
                    <ArrowRightUpIcon width='32' height='32' />
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='block lg:hidden'>
          <h6 className='font-thin uppercase pb-6'>{t('news.title')}</h6>
          <div className='flex flex-col'>
            {newsData?.map((newsSingle, index) => {
              const newsId = newsSingle.localeId || newsSingle.id

              if (index < 3) {
                return (
                  <a href={`/news/${newsId}`} key={`sitemap-news-${newsId}`}>
                    <div className='flex justify-between border-t-[1px] border-charcoal-100 py- text-xs items-center'>
                      {newsSingle.attributes.title}
                      <div className='block'>
                        {index === 0 && <ArrowRightUpIcon />}
                      </div>
                    </div>
                  </a>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
