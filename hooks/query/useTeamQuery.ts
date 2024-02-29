import { TeamApi } from '@/services/team.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllTeamQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.TEAM],
    queryFn: async () => {
      const response = await TeamApi.getAll()

      return response
    },
  })

  return query
}
