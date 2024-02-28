'use client'

import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'

import { ProjectFilter } from './ProjectFilter'
import { SingleProject } from './SingleProject'

export function ProjectsWrapper() {
  const { data } = useGetAllProjectQuery()

  return (
    <>
      <ProjectFilter />
      <div className='grid grid-cols-3'>
        {data?.data.map((project) => {
          return <SingleProject project={project} key={project.id} />
        })}
      </div>
    </>
  )
}
