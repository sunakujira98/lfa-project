/* eslint-disable @next/next/no-img-element */

import { Project } from '@/domain/types/project.types'

type ProjectSingleProps = {
  project: Project
}

export function ProjectSingle({ project }: ProjectSingleProps) {
  return (
    <div className='flex flex-col gap' key={project.id}>
      <img
        src={`http://localhost:1337${project.attributes.thumbnail.data.attributes.url}`}
        className='max-w-96 h-52 aspect-auto'
        alt={project.attributes.title}
      />
      <div className='flex flex-col'>
        <a href={`/projects/${project.id}`}>
          <h1 className='text-2xl font-light'>{project.attributes.title}</h1>
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
