import { StrapiResponse } from '@/domain/types/common.types'
import { Region } from '@/domain/types/region.types'
import { apiInstance } from './api'

const BASE_URL = '/regions'

export const RegionApi = {
  getAll: async function (): Promise<StrapiResponse<Region>> {
    const result = await apiInstance.get<StrapiResponse<Region>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
