import { TncApi } from '@/services/tnc.api'
import { useQuery } from '@tanstack/react-query'

import { EQueryKey } from './constants/react-query.constant'

export const useGetAllTncQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.TNC],
    queryFn: async () => {
      const response = await TncApi.getAll()

      return response
    },
  })

  return query
}
