'use client'

import { useParams } from 'next/navigation'
import { parseAsString, useQueryState } from 'next-usequerystate'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { ScreenSpinner } from '@/components/shared/ScreenSpinner'
import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

import { ProjectFilter } from './ProjectFilter'
import { ProjectSingle } from './ProjectSingle'

export function ProjectsWrapper() {
  const { t } = useTranslation()
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

  const onChangeIndustryQuery = (industryValue?: number | undefined) => {
    if (industryValue) {
      setIndustryQuery(industryValue.toString())
      return
    }
    setIndustryQuery('')
  }

  const onChangeServiceQuery = (serviceValue?: number | undefined) => {
    if (serviceValue) {
      setServiceQuery(serviceValue.toString())
      return
    }
    setServiceQuery('')
  }

  const onChangeRegionQuery = (regionValue?: number | undefined) => {
    if (regionValue) {
      setRegionQuery(regionValue.toString())
      return
    }
    setRegionQuery('')
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
      <h1 className='hidden lg:block text-2xl py-10 font-thin'>
        {t('header.projects')}
      </h1>
      <ProjectFilter
        onChangeIndustryQuery={onChangeIndustryQuery}
        onChangeServiceQuery={onChangeServiceQuery}
        onChangeRegionQuery={onChangeRegionQuery}
        onChangeHasVideoQuery={onChangeHasVideoQuery}
        onChangeIsAwardWinning={onChangeIsAwardWinning}
        industryId={industryQuery}
        serviceId={serviceQuery}
        regionId={regionQuery}
        hasVideo={hasVideo}
        isAwardWinning={isAwardWinning}
      />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 overflow-x-hidden pb-20'>
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
              <div
                className='flex flex-col items-center justify-center'
                key={singleProject.id}
              >
                <ProjectSingle
                  project={singleProject}
                  key={singleProject.id}
                  localeId={localeId}
                />
              </div>
            )
          })
        })}
      </div>
      <div ref={ref} />
      {isFetchingNextPage && <ScreenSpinner />}
    </>
  )
}
