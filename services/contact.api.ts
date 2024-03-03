import { StrapiResponse } from '@/domain/types/common.types'
import { Contact } from '@/domain/types/contact.types'

import { apiInstance } from './api'

const BASE_URL = '/contact'

export const ContactApi = {
  getAll: async function (): Promise<Contact> {
    const result = await apiInstance.get<Contact>(`${BASE_URL}?populate=*`)

    return result.data
  },
}
