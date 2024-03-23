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
          className='w-full md:w-full aspect-auto object-cover lg:h-52'
          alt={project.attributes.title}
        />
      </Link>
      <div className='flex flex-col'>
        <Link href={`/projects/${localeId}`}>
          <h1 className='text-2xl font-thin'>{project.attributes.title}</h1>
        </Link>
        <div className='flex flex-row'>
          <Link
            href={`/projects?industry=${project.attributes.industry.data.id}`}
          >
            <span className='text-2xs underline font-thin'>
              {project.attributes.industry.data.attributes.name}
            </span>
          </Link>
          <div className='text-xs font-thin'>&nbsp; | &nbsp;</div>
          <Link
            href={`/projects?service=${project.attributes.service.data.id}`}
          >
            <span className='text-2xs underline font-thin'>
              {project.attributes.service.data.attributes.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
