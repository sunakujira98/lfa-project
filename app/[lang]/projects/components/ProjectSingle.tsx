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
      <img
        src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
        className='w-full md:w-full aspect-auto object-cover lg:h-52'
        alt={project.attributes.title}
      />
      <div className='flex flex-col'>
        <Link href={`/projects/${localeId}`}>
          <h1 className='text-2xl font-thin'>{project.attributes.title}</h1>
        </Link>
        <div className='flex flex-row'>
          <a href='#'>
            <span className='text-2xs underline font-thin'>
              {project.attributes.industry.data.attributes.name}
            </span>
          </a>
          <div className='text-xs font-thin'>&nbsp; | &nbsp;</div>
          <a href='#'>
            <span className='text-2xs underline font-thin'>
              {project.attributes.service.data.attributes.title}
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
