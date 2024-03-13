import { StrapiResponse } from '@/domain/types/common.types'
import { TRecognition } from '@/domain/types/recognition.types'
import { apiInstance } from './api'

const BASE_URL = '/recognitions'

export const RecognitionApi = {
  getAll: async function (): Promise<StrapiResponse<TRecognition>> {
    const result = await apiInstance.get<StrapiResponse<TRecognition>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
