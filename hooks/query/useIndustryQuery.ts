import { IndustryApi } from '@/services/industry.api'
import { useQuery } from '@tanstack/react-query'

import { EQueryKey } from './constants/react-query.constant'

export const useGetAllIndustryQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.INDUSTRY],
    queryFn: async () => {
      const response = await IndustryApi.getAll()

      return response
    },
  })

  return query
}
