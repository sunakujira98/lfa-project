'use client'

import { useParams } from 'next/navigation'

import { Link } from '@/components/shared/Link'
import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'
import {
  useGetAllProjectQuery,
  useGetAllProjectQueryWithoutInfinite,
} from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function SitemapSection() {
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
    <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
      <div className='pb-20'>
        <h3>{t('sitemap.title')}</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 font-thin md:font-normal'>
        <div>
          <div className='mb-[31px]'>
            <h6 className='font-thin uppercase pb-6'>{t('header.projects')}</h6>
            <div className='flex flex-col'>
              {projectsData.map((project, index) => {
                const projectId = project.localeId || project.id

                if (index < 3) {
                  return (
                    <a
                      href={`/projects/${projectId}`}
                      key={`sitemap-project-${projectId}`}
                    >
                      <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                        {project.attributes.title}
                        <div className='hidden md:block'>
                          {index === 0 && <ArrowRightUpIcon />}
                        </div>
                      </div>
                    </a>
                  )
                }
              })}
            </div>
          </div>
          <div className='hidden md:block'>
            <h6 className='font-thin uppercase pb-6'>{t('news.title')}</h6>
            <div className='flex flex-col'>
              {newsData?.map((singleNews, index) => {
                const newsId = singleNews.localeId || singleNews.id

                if (index < 3) {
                  return (
                    <a href={`/news/${newsId}`} key={`sitemap-news-${newsId}`}>
                      <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-5 text-xs items-center'>
                        {singleNews.attributes.title}
                        <div className='hidden md:block'>
                          {index === 0 && <ArrowRightUpIcon />}
                        </div>
                      </div>
                    </a>
                  )
                }
              })}
            </div>
          </div>
          <div className='block md:hidden pt-20 md:pt-0'>
            <h6 className='font-thin uppercase pb-6'>{t('sitemap.pages')}</h6>
            <div className='flex flex-col'>
              <Link href={'/'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.home')}
                  <div className='hidden md:block'>
                    <ArrowRightUpIcon />
                  </div>
                </div>
              </Link>
              <Link href={'/projects'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.projects')}
                </div>
              </Link>
              <Link href={'/about'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.about')}
                </div>
              </Link>
              <Link href={'/services'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.services')}
                </div>
              </Link>
              <Link href={'/testimonials'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.testimonials')}
                </div>
              </Link>
              <Link href={'/contact'}>
                <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                  {t('header.contact')}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <h6 className='font-thin uppercase pb-6'>{t('sitemap.pages')}</h6>
          <div className='flex flex-col'>
            <Link href={'/'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.home')}
                <ArrowRightUpIcon />
              </div>
            </Link>
            <Link href={'/projects'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.projects')}
              </div>
            </Link>
            <Link href={'/about'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.about')}
              </div>
            </Link>
            <Link href={'/services'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.services')}
              </div>
            </Link>
            <Link href={'/testimonials'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.testimonials')}
              </div>
            </Link>
            <Link href={'/contact'}>
              <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-6 text-xs items-center'>
                {t('header.contact')}
                <ArrowRightUpIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className='block md:hidden'>
          <h6 className='font-thin uppercase pb-6'>{t('news.title')}</h6>
          <div className='flex flex-col'>
            {newsData?.map((newsSingle, index) => {
              const newsId = newsSingle.localeId || newsSingle.id

              if (index < 3) {
                return (
                  <a href={`/news/${newsId}`} key={`sitemap-news-${newsId}`}>
                    <div className='flex justify-between border-t-[1px] border-charcoal-1000 py-5 text-xs items-center'>
                      {newsSingle.attributes.title}
                      <div className='hidden md:block'>
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
