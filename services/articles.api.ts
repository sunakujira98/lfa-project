import { Article, TArticleFilter } from '@/domain/types/article.types'
import {
  StrapiResponse,
  StrapiSingleResponse,
  TQueryParams,
} from '@/domain/types/common.types'
import { apiInstance } from './api'

const BASE_URL = '/articles'

type TArticlePagination = {
  limit?: number
  start?: number
}

export const ArticleApi = {
  getAll: async function (
    params?: TQueryParams,
  ): Promise<StrapiResponse<Article>> {
    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?populate=*`,
      {
        params: {
          ...params,
        },
      },
    )

    return result.data
  },

  getWithFilter: async function (
    data: TArticleFilter,
  ): Promise<StrapiResponse<Article>> {
    const { limit, start, sort } = data

    const params: {
      pagination?: TArticlePagination
      sort?: any
    } = {}

    if (limit) {
      params.pagination = { ...params.pagination, limit }
    }

    if (start) {
      params.pagination = { ...params.pagination, start }
    }

    if (sort) {
      params.sort = { ...params.sort, ...sort }
    }

    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?populate=*`,
      {
        params,
      },
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
