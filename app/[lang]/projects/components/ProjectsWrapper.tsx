'use client'

import { useParams } from 'next/navigation'

import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

import { ProjectFilter } from './ProjectFilter'
import { ProjectSingle } from './ProjectSingle'

export function ProjectsWrapper() {
  const { lang } = useParams()
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
    <>
      <ProjectFilter />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden'>
        {projects.map((project) => {
          const localeId = project.localeId || project.id

          return (
            <ProjectSingle
              project={project}
              key={project.id}
              localeId={localeId}
            />
          )
        })}
      </div>
    </>
  )
}
