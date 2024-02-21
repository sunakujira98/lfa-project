import { Article } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { apiInstance } from './api'

const BASE_URL = '/articles'

export const ArticleApi = {
  getAll: async function (): Promise<StrapiResponse<Article>> {
    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
