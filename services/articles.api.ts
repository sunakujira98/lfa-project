import { Article } from '@/domain/types/article.types'
import {
  StrapiResponse,
  StrapiSingleResponse,
} from '@/domain/types/common.types'
import { apiInstance } from './api'

const BASE_URL = '/articles'

export const ArticleApi = {
  getAll: async function (): Promise<StrapiResponse<Article>> {
    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },

  getById: async function (id: string): Promise<StrapiSingleResponse<Article>> {
    const result = await apiInstance.get<StrapiSingleResponse<Article>>(
      `${BASE_URL}/${id}?populate[detail][populate]=*populate=*&populate[thumbnail]=*`,
    )

    return result.data
  },
}
