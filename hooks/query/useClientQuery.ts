import { ClientApi } from '@/services/client.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllClientQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.CLIENT],
    queryFn: async () => {
      const response = await ClientApi.getAll()

      return response
    },
  })

  return query
}
