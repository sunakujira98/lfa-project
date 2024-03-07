import { FaqApi } from '@/services/faq.api'
import { useQuery } from '@tanstack/react-query'

import { EQueryKey } from './constants/react-query.constant'

export const useGetAllFaqQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.FAQ],
    queryFn: async () => {
      const response = await FaqApi.getAll()

      return response
    },
  })

  return query
}
