'use client'

import { useParams } from 'next/navigation'
import { parseAsString, useQueryState } from 'next-usequerystate'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { ScreenSpinner } from '@/components/shared/ScreenSpinner'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

import { ProjectFilter } from './ProjectFilter'
import { ProjectSingle } from './ProjectSingle'

export function ProjectsWrapper() {
  const { ref, inView } = useInView()
  const { lang } = useParams()

  const [industryQuery, setIndustryQuery] = useQueryState(
    'industry',
    parseAsString.withDefault(''),
  )

  const [serviceQuery, setServiceQuery] = useQueryState(
    'service',
    parseAsString.withDefault(''),
  )

  const [regionQuery, setRegionQuery] = useQueryState(
    'region',
    parseAsString.withDefault(''),
  )

  const [hasVideo, setHasVideo] = useQueryState(
    'hasVideo',
    parseAsString.withDefault(''),
  )

  const [isAwardWinning, setIsAwardWinning] = useQueryState(
    'isAwardWinning',
    parseAsString.withDefault(''),
  )

  const { data, isLoading, fetchNextPage, error, isFetchingNextPage } =
    useGetAllProjectQuery({
      industryId: industryQuery,
      serviceId: serviceQuery,
      regionId: regionQuery,
      hasVideo,
      isAwardWinning,
      sort: {
        0: { createdAt: 'desc' },
      },
    })

  useEffect(() => {
    if (inView && !isLoading && !error) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isLoading, error])

  const onChangeIndustryQuery = (industryValue: number) => {
    setIndustryQuery(industryValue.toString())
  }

  const onChangeServiceQuery = (serviceValue: number) => {
    setServiceQuery(serviceValue.toString())
  }

  const onChangeRegionQuery = (regionValue: number) => {
    setRegionQuery(regionValue.toString())
  }

  const onChangeHasVideoQuery = (hasVideoValue: boolean) => {
    if (hasVideoValue) {
      setHasVideo('true')
    } else {
      setHasVideo('false')
    }
  }

  const onChangeIsAwardWinning = (hasAward: boolean) => {
    if (hasAward) {
      setIsAwardWinning('true')
    } else {
      setIsAwardWinning('false')
    }
  }

  return isLoading ? (
    <ScreenSpinner />
  ) : (
    <>
      <ProjectFilter
        onChangeIndustryQuery={onChangeIndustryQuery}
        onChangeServiceQuery={onChangeServiceQuery}
        onChangeRegionQuery={onChangeRegionQuery}
        onChangeHasVideoQuery={onChangeHasVideoQuery}
        onChangeIsAwardWinning={onChangeIsAwardWinning}
        industryId={industryQuery}
        serviceId={serviceQuery}
        regionId={regionQuery}
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden pb-20'>
        {data?.pages?.flatMap((projects) => {
          const localizedData = findTranslatedData(
            lang as string,
            projects,
          ) as StrapiResponse<Project>

          const project =
            localizedData.data.length > 0
              ? localizedData.data
              : data?.pages?.[0].data

          return project.map((singleProject) => {
            const localeId = singleProject.localeId || singleProject.id

            return (
              <ProjectSingle
                project={singleProject}
                key={singleProject.id}
                localeId={localeId}
              />
            )
          })
        })}
      </div>
      <div ref={ref} />
      {isFetchingNextPage && <ScreenSpinner />}
    </>
  )
}
