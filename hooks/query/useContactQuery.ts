import { ContactApi } from '@/services/contact.api'
import { useQuery } from '@tanstack/react-query'

import { EQueryKey } from './constants/react-query.constant'

export const useGetContactQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.CONTACT],
    queryFn: async () => {
      const response = await ContactApi.getAll()

      return response
    },
  })

  return query
}
