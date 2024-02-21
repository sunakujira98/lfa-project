import { Client } from '@/domain/types/client.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { apiInstance } from './api'

const BASE_URL = '/clients'

export const ClientApi = {
  getAll: async function (): Promise<StrapiResponse<Client>> {
    const result = await apiInstance.get<StrapiResponse<Client>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
