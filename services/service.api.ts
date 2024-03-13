import { StrapiResponse } from '@/domain/types/common.types'
import { TService } from '@/domain/types/services.types'

import { apiInstance } from './api'

const BASE_URL = '/services'

export const ServiceApi = {
  getAll: async function (): Promise<StrapiResponse<TService>> {
    const result = await apiInstance.get<StrapiResponse<TService>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
