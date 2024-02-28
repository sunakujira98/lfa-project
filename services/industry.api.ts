import { apiInstance } from './api'
import { StrapiResponse } from '@/domain/types/common.types'
import { Industry } from '@/domain/types/industry.types'

const BASE_URL = '/industries'

export const IndustryApi = {
  getAll: async function (): Promise<StrapiResponse<Industry>> {
    const result = await apiInstance.get<StrapiResponse<Industry>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
