import { StrapiResponse } from '@/domain/types/common.types'
import { TPrivacyPolicy } from '@/domain/types/privacyPolicy.types'

import { apiInstance } from './api'

const BASE_URL = '/privacy-policies'

export const PrivacyPolicyApi = {
  getAll: async function (): Promise<StrapiResponse<TPrivacyPolicy>> {
    const result = await apiInstance.get<StrapiResponse<TPrivacyPolicy>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
