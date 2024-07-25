/* eslint-disable @typescript-eslint/no-explicit-any */
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
    lang?: string | string[],
  ): Promise<StrapiResponse<Article>> {
    const appendLang = lang === 'zh-CN' ? '&locale=zh-CN' : '&locale=en'

    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?populate=*${appendLang}`,
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
    lang: string | string[],
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

    const appendLang = lang === 'zh-CN' ? '&locale=zh-CN' : '&locale=en'

    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}?${appendLang}&populate[thumbnail][populate]=*&populate[localizations][populate]=*`,
      {
        params,
      },
    )

    return result.data
  },

  getById: async function (
    id: string,
    lang: string | string[],
  ): Promise<StrapiSingleResponse<Article>> {
    let result = undefined

    result = await apiInstance.get<StrapiSingleResponse<Article>>(
      `${BASE_URL}/${id}?populate[detail][populate]=*populate=*&populate[thumbnail]=*&populate[localizations]=*`,
    )

    if (lang === 'zh-CN') {
      result = await apiInstance.get<StrapiSingleResponse<Article>>(
        `${BASE_URL}/${result.data.data.attributes.localizations.data[0].id}?populate[detail][populate]=*populate=*&populate[thumbnail]=*`,
      )
    }

    return result.data
  },

  getBySlug: async function (
    slug: string,
    lang: string | string[],
  ): Promise<StrapiSingleResponse<Article>> {
    let result = undefined

    result = await apiInstance.get<any>(
      `${BASE_URL}?filters][slug][$eq]=${slug}&populate[detail][populate]=*populate=*&populate[thumbnail]=*&populate[localizations]=*`,
    )

    if (lang === 'zh-CN') {
      result = await apiInstance.get<any>(
        `${BASE_URL}/${result.data.data[0].attributes.localizations.data[0].id}?populate[detail][populate]=*populate=*&populate[thumbnail]=*`,
      )
    }

    return { data: result.data.data[0], meta: result.data.data[0].meta }
  },

  getAllMinimal: async function (
    lang: string | string[],
  ): Promise<StrapiResponse<Article>> {
    const appendLang = lang === 'zh-CN' ? '?locale=zh-CN' : '?locale=en'

    const result = await apiInstance.get<StrapiResponse<Article>>(
      `${BASE_URL}${appendLang}`,
    )

    return result.data
  },
}
