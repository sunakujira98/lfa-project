import { PrivacyPolicyApi } from '@/services/privacyPolicy.api'
import { useQuery } from '@tanstack/react-query'

import { EQueryKey } from './constants/react-query.constant'

export const useGetAllPrivacyPolicyQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.PRIVACY_POLICY],
    queryFn: async () => {
      const response = await PrivacyPolicyApi.getAll()

      return response
    },
  })

  return query
}
