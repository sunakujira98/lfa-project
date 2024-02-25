import { ServiceApi } from '@/services/service.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllServiceQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.SERVICE],
    queryFn: async () => {
      const response = await ServiceApi.getAll()

      return response
    },
  })

  return query
}
