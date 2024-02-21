import { AwardApi } from '@/services/awards.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllAwardQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.AWARD],
    queryFn: async () => {
      const response = await AwardApi.getAll()

      return response
    },
  })

  return query
}
