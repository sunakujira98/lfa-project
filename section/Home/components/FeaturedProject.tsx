/* eslint-disable @next/next/no-img-element */

'use client'
import { Link } from '@/components/shared/Link'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import {
  useGetAllProjectQuery,
  useGetAllProjectQueryWithoutInfinite,
} from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import { useParams } from 'next/navigation'

export function FeaturedProject() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { data, isSuccess } = useGetAllProjectQueryWithoutInfinite({})

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
      <div className='max-w-screen-xl mx-auto pt-10 px-4 lg:px-0'>
        <div className='pb-10'>
          <span className='neue-wide'>{t('featuredProject.title')}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {projects.map((project) => {
            if (project.attributes.isFeatured) {
              const params = new URLSearchParams()

              const projectId = project.localeId || project.id
              const industry = project.attributes.industry?.data?.id
              const service = project.attributes.service?.data?.id
              const region = project.attributes.region?.data?.id

              if (industry) {
                params.append('industry', industry.toString())
              }

              if (service) {
                params.append('service', service.toString())
              }

              if (region) {
                params.append('region', region.toString())
              }

              return (
                <div className='container pb-10' key={project.id}>
                  <Link href={`/projects?${params}`}>
                    <div className='img-hover-zoom'>
                      <img
                        src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
                        className='w-96 h-96 md:w-full lg:w-full lg:h-full object-cover object-center cursor-pointer'
                        alt={project.attributes.title}
                      />
                    </div>
                  </Link>
                  <div className='flex flex-col pt-4'>
                    <Link
                      href={`${lang}/projects/${projectId}`}
                      className='hover:underline'
                    >
                      <h3 className='vinila-tight'>
                        {project.attributes.title}
                      </h3>
                    </Link>
                    <div className='flex flex-row'>
                      <Link
                        href={`/projects?industry=${project.attributes.industry.data.id}`}
                      >
                        <span className='neue-wide-light !normal-case underline'>
                          {project.attributes.industry.data.attributes.name}
                        </span>
                      </Link>
                      <div className='text-xs font-thin'>&nbsp; | &nbsp;</div>
                      <Link
                        href={`/projects?service=${project.attributes.service.data.id}`}
                      >
                        <span className='neue-wide-light !normal-case underline'>
                          {project.attributes.service.data.attributes.title}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className='flex justify-center items-center'>
          <Link href='/projects'>
            <span className='neue-wide'>
              {t('featuredProject.allProjects')}
            </span>
          </Link>
        </div>
      </div>
    )
  )
}
