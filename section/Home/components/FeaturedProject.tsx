/* eslint-disable @next/next/no-img-element */

'use client'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { useParams } from 'next/navigation'

export function FeaturedProject() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { data, isSuccess } = useGetAllProjectQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<Project>

  const projects = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
        <div className='pb-10'>
          <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
            {t('featuredProject.title')}
          </span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {projects.map((project) => {
            if (project.attributes.isFeatured) {
              const projectId = project.localeId || project.id

              return (
                <div className='container pb-10' key={project.id}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
                    className='w-96 h-96 aspect-square md:w-screen md:bg-cover md:h-full md:bg-center md:aspect-auto'
                    alt={project.attributes.title}
                  />
                  <div className='flex flex-col pt-4'>
                    <a href={`${lang}/projects/${projectId}`}>
                      <h3 className='font-vinila text-2xl text-gray-50 tracking-wide font-light'>
                        {project.attributes.title}
                      </h3>
                    </a>
                    <div className='flex flex-row'>
                      <a href='#'>
                        <span className='text-2xs underline font-light'>
                          {project.attributes.industry.data.attributes.name}
                        </span>
                      </a>
                      <div className='text-xs font-thin'>&nbsp; | &nbsp;</div>
                      <a href='#'>
                        <span className='text-2xs underline font-light'>
                          {project.attributes.service.data.attributes.title}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className='flex justify-center items-center'>
          <a href='/project'>
            <span className='font-neue text-3xs text-gray-50 uppercase tracking-wider'>
              {t('featuredProject.allProjects')}
            </span>
          </a>
        </div>
      </div>
    )
  )
}
