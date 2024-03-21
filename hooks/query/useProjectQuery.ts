import { TProjectFilter } from '@/domain/types/project.types'
import { ProjectApi } from '@/services/project.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllProjectQuery = (data: TProjectFilter) => {
  const { industryId, serviceId, regionId, hasVideo, isAwardWinning } = data
  const query = useQuery({
    queryKey: [
      EQueryKey.PROJECT,
      {
        industryId,
        serviceId,
        regionId,
        hasVideo,
        isAwardWinning,
      },
    ],
    queryFn: async () => {
      const response = await ProjectApi.getAll(data)

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
