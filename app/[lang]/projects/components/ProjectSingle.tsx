/* eslint-disable @next/next/no-img-element */

import { Link } from '@/components/shared/Link'
import { Project } from '@/domain/types/project.types'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type ProjectSingleProps = {
  project: Project
  localeId: number
}

export function ProjectSingle({ project, localeId }: ProjectSingleProps) {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col pb-6' key={project.id}>
      <div className='relative'>
        {project.attributes.comingSoon ? (
          <>
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
              className='w-96 h-96 md:w-full aspect-auto object-cover lg:h-52 object-center'
              alt={project.attributes.title}
            />
            <span className='neue-wide text-lfaWhite inline-flex items-center bg-charcoal-1000 p-2 text-3xs font-medium border-gray-200 ring-inset absolute top-0 right-0 uppercase rounded-none'>
              {t('featuredProject.comingSoon')}
            </span>
          </>
        ) : (
          <Link href={`/projects/${localeId}`}>
            <div className='img-hover-zoom'>
              <img
                src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
                className='w-96 h-96 md:w-full aspect-auto object-cover lg:h-52 object-center'
                alt={project.attributes.title}
              />
            </div>
          </Link>
        )}
      </div>

      <div className='flex flex-col pt-4'>
        <div className='h-10'>
          {project.attributes.comingSoon ? (
            <h1 className='vinila-tight'>{project.attributes.title}</h1>
          ) : (
            <Link href={`/projects/${localeId}`}>
              <h1 className='vinila-tight'>{project.attributes.title}</h1>
            </Link>
          )}
          <div className='flex flex-row items-center mt-2 flex-wrap'>
            {project.attributes.industry?.data?.id && (
              <Link
                href={`/projects?industry=${project.attributes.industry.data.id}`}
                className='inline-flex'
              >
                <span className='neue-3xs-normal'>
                  {project.attributes.industry.data.attributes.name}
                </span>
              </Link>
            )}
            <div className='text-xs font-thin'>&nbsp;|&nbsp;</div>
            <Link
              href={`/projects?service=${project.attributes.service.data.id}`}
              className='inline-flex'
            >
              <span className='neue-3xs-normal'>
                {project.attributes.service.data.attributes.title}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
