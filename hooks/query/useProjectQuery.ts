import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { TProjectFilter } from '@/domain/types/project.types'
import { ProjectApi } from '@/services/project.api'

import { EQueryKey } from './constants/react-query.constant'

export const useGetAllProjectQuery = (
  data: TProjectFilter,
  lang: string | string[],
) => {
  const {
    industryId,
    serviceId,
    regionId,
    hasVideo,
    isAwardWinning,
    limit,
    start,
    sort,
    comingSoon,
  } = data
  const query = useInfiniteQuery({
    queryKey: [
      EQueryKey.PROJECT,
      {
        industryId,
        serviceId,
        regionId,
        hasVideo,
        isAwardWinning,
        limit,
        start,
        sort,
        comingSoon,
      },
      lang,
    ],
    queryFn: async ({ pageParam }) => {
      const response = await ProjectApi.getAll(
        {
          ...data,
          start: pageParam,
          limit: 6,
        },
        lang,
      )

      return response
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (
        lastPage.meta.pagination.total <=
          lastPage.meta.pagination.limit *
            Math.max(lastPage.meta.pagination.start, 1) ||
        allPages?.[0]?.meta?.pagination?.total <
          lastPage.meta.pagination.limit *
            Math.max(lastPage.meta.pagination.start, 1)
      ) {
        return undefined
      }
      return lastPage.meta.pagination.start + 6
    },
  })

  return query
}

export const useGetAllProjectQueryWithoutInfinite = (
  data: TProjectFilter,
  lang: string | string[],
) => {
  const {
    industryId,
    serviceId,
    regionId,
    hasVideo,
    isAwardWinning,
    limit,
    start,
  } = data
  const query = useQuery({
    queryKey: [
      EQueryKey.PROJECT,
      {
        industryId,
        serviceId,
        regionId,
        hasVideo,
        isAwardWinning,
        limit,
        start,
      },
      lang,
    ],
    queryFn: async () => {
      const response = await ProjectApi.getAll(
        {
          ...data,
        },
        lang,
      )

      return response
    },
  })

  return query
}

export const useGetProjectByIdQuery = (id: string, lang: string | string[]) => {
  const query = useQuery({
    queryKey: [EQueryKey.PROJECT, { id, lang }],
    queryFn: async () => {
      const response = await ProjectApi.getById(id, lang)

      return response
    },
  })

  return query
}

export const useGetProjectBySlugQuery = (
  slug: string,
  lang: string | string[],
) => {
  const query = useQuery({
    queryKey: [EQueryKey.PROJECT, { slug, lang }],
    queryFn: async () => {
      const response = await ProjectApi.getBySlug(slug, lang)

      return response
    },
  })

  return query
}

export const useGetAllProjectQueryMinimal = (lang: string | string[]) => {
  const query = useQuery({
    queryKey: [EQueryKey.PROJECT_MINIMAL, lang],
    queryFn: async () => {
      const response = await ProjectApi.getAllMinimal(lang)

      return response
    },
  })

  return query
}
