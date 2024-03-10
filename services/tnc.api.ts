import { StrapiResponse } from '@/domain/types/common.types'
import { TTnc } from '@/domain/types/tnc.types'

import { apiInstance } from './api'

const BASE_URL = '/terms-and-conditions'

export const TncApi = {
  getAll: async function (): Promise<StrapiResponse<TTnc>> {
    const result = await apiInstance.get<StrapiResponse<TTnc>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
