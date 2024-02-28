import { ProjectApi } from '@/services/project.api'
import { useQuery } from '@tanstack/react-query'
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
