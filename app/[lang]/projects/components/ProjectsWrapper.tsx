'use client'

import Lottie from 'lottie-react'
import { useParams } from 'next/navigation'
import { parseAsString, useQueryState } from 'next-usequerystate'

import { StrapiResponse } from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'
import lfaLottieJson from '@/lottie-animations/lfa-lottie-animation.json'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

import { ProjectFilter } from './ProjectFilter'
import { ProjectSingle } from './ProjectSingle'

export function ProjectsWrapper() {
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

  const { data, isSuccess, isLoading } = useGetAllProjectQuery({
    industryId: industryQuery,
    serviceId: serviceQuery,
    regionId: regionQuery,
    hasVideo,
    isAwardWinning,
  })

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

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<Project>

  const projects = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  return isLoading ? (
    <Lottie animationData={lfaLottieJson} loop />
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
