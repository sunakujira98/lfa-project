import { Award } from '@/domain/types/award.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { apiInstance } from './api'

const BASE_URL = '/awards'

export const AwardApi = {
  getAll: async function (): Promise<StrapiResponse<Award>> {
    const result = await apiInstance.get<StrapiResponse<Award>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
