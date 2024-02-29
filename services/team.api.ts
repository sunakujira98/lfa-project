import { StrapiResponse } from '@/domain/types/common.types'
import { TTeam } from '@/domain/types/team.types'

import { apiInstance } from './api'

const BASE_URL = '/teams'

export const TeamApi = {
  getAll: async function (): Promise<StrapiResponse<TTeam>> {
    const result = await apiInstance.get<StrapiResponse<TTeam>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
