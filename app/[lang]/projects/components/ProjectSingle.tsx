/* eslint-disable @next/next/no-img-element */

import { Link } from '@/components/shared/Link'
import { Project } from '@/domain/types/project.types'

type ProjectSingleProps = {
  project: Project
  localeId: number
}

export function ProjectSingle({ project, localeId }: ProjectSingleProps) {
  return (
    <div className='flex flex-col' key={project.id}>
      <Link href={`/projects/${localeId}`}>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
          className='w-96 h-96 md:w-full aspect-auto object-cover lg:h-52 object-center'
          alt={project.attributes.title}
        />
      </Link>
      <div className='flex flex-col pt-4'>
        <Link href={`/projects/${localeId}`}>
          <h1 className='vinila-tight'>{project.attributes.title}</h1>
        </Link>
        <div className='flex flex-row'>
          <Link
            href={`/projects?industry=${project.attributes.industry.data.id}`}
          >
            <span className='neue-3xs-normal'>
              {project.attributes.industry.data.attributes.name}
            </span>
          </Link>
          <div className='text-xs font-thin'>&nbsp; | &nbsp;</div>
          <Link
            href={`/projects?service=${project.attributes.service.data.id}`}
          >
            <span className='neue-3xs-normal'>
              {project.attributes.service.data.attributes.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
