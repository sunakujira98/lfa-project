import { StrapiResponse } from '@/domain/types/common.types'
import {
  IBasicContactEnquiry,
  TContactEnquiry,
} from '@/domain/types/contactEnquiry.types'

import { apiInstance } from './api'

const BASE_URL = '/contact'

export const ContactApi = {
  sendMail: async function (
    requestBody: IBasicContactEnquiry,
  ): Promise<StrapiResponse<TContactEnquiry>> {
    const result = await apiInstance.post<StrapiResponse<TContactEnquiry>>(
      `${BASE_URL}/send-mail`,
      requestBody,
    )

    return result.data
  },
}
