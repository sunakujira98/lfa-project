import { ProjectApi } from '@/services/project.api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllProjectQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.PROJECT],
    queryFn: async () => {
      const response = await ProjectApi.getAll()

      return response
    },
  })

  return query
}
