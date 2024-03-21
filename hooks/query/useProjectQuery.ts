import { TProjectFilter } from '@/domain/types/project.types'
import { ProjectApi } from '@/services/project.api'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllProjectQuery = (data: TProjectFilter) => {
  const {
    industryId,
    serviceId,
    regionId,
    hasVideo,
    isAwardWinning,
    limit,
    start,
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
      },
    ],
    queryFn: async ({ pageParam }) => {
      const response = await ProjectApi.getAll({
        ...data,
        start: pageParam,
        limit: 6,
      })

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

export const useGetAllProjectQueryWithoutInfinite = (data: TProjectFilter) => {
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
    ],
    queryFn: async () => {
      const response = await ProjectApi.getAll({
        ...data,
      })

      return response
    },
  })

  return query
}

export const useGetProjectByIdQuery = (id: string) => {
  const query = useQuery({
    queryKey: [EQueryKey.PROJECT, id],
    queryFn: async () => {
      const response = await ProjectApi.getById(id)

      return response
    },
  })

  return query
}
