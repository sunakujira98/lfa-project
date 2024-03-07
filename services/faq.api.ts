import { StrapiResponse } from '@/domain/types/common.types'
import { TFAQ } from '@/domain/types/faq.types'

import { apiInstance } from './api'

const BASE_URL = '/faqs'

export const FaqApi = {
  getAll: async function (): Promise<StrapiResponse<TFAQ>> {
    const result = await apiInstance.get<StrapiResponse<TFAQ>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
