'use client'

import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'

import { ProjectFilter } from './ProjectFilter'
import { ProjectSingle } from './ProjectSingle'

export function ProjectsWrapper() {
  const { data } = useGetAllProjectQuery()

  return (
    <>
      <ProjectFilter />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden'>
        {data?.data.map((project) => {
          return <ProjectSingle project={project} key={project.id} />
        })}
      </div>
    </>
  )
}
