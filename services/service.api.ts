import { StrapiResponse } from '@/domain/types/common.types'
import { Service } from '@/domain/types/services.types'

import { apiInstance } from './api'

const BASE_URL = '/services'

export const ServiceApi = {
  getAll: async function (): Promise<StrapiResponse<Service>> {
    const result = await apiInstance.get<StrapiResponse<Service>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
