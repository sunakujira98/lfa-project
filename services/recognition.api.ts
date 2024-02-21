import { StrapiResponse } from '@/domain/types/common.types'
import { Recognition } from '@/domain/types/recognition.types'
import { apiInstance } from './api'

const BASE_URL = '/recognitions'

export const RecognitionApi = {
  getAll: async function (): Promise<StrapiResponse<Recognition>> {
    const result = await apiInstance.get<StrapiResponse<Recognition>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
