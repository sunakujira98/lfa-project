import { RegionApi } from '@/services/regions.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllRegionsQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.REGION],
    queryFn: async () => {
      const response = await RegionApi.getAll()

      return response
    },
  })

  return query
}
