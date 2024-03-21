import {
  SortParams,
  StrapiResponse,
  StrapiSingleResponse,
} from '@/domain/types/common.types'
import { Project, TProjectFilter } from '@/domain/types/project.types'
import { apiInstance } from './api'

const BASE_URL = '/projects'

type TProjectFilters = {
  industry?: { id: string }
  service?: { id: string }
  region?: { id: string }
  hasVideo?: string
  awards?: {
    $not: string
  }
}

type TProjectPagination = {
  limit?: number
  start?: number
}

export const ProjectApi = {
  getAll: async function (data: TProjectFilter) {
    const {
      industryId,
      serviceId,
      regionId,
      hasVideo,
      isAwardWinning,
      limit,
      start,
      sort,
    } = data
    const params: {
      filters?: TProjectFilters
      pagination?: TProjectPagination
      sort?: any
    } = {}

    if (industryId) {
      params.filters = { ...params.filters, industry: { id: industryId } }
    }

    if (serviceId) {
      params.filters = { ...params.filters, service: { id: serviceId } }
    }

    if (regionId) {
      params.filters = { ...params.filters, region: { id: regionId } }
    }

    if (hasVideo === 'true') {
      params.filters = { ...params.filters, hasVideo: 'true' }
    }

    if (isAwardWinning === 'true') {
      params.filters = { ...params.filters, awards: { $not: 'null' } }
    }

    if (limit) {
      params.pagination = { ...params.filters, ...params.pagination, limit }
    }

    if (start) {
      params.pagination = { ...params.filters, ...params.pagination, start }
    }

    if (sort) {
      params.sort = { ...params.sort, ...sort }
    }

    const result = await apiInstance.get<StrapiResponse<Project>>(
      `${BASE_URL}?populate=*`,
      { params },
    )

    return result.data
  },

  getById: async function (id: string): Promise<StrapiSingleResponse<Project>> {
    const result = await apiInstance.get<StrapiSingleResponse<Project>>(
      `${BASE_URL}/${id}?populate[detail][populate]=*&populate[industry][populate]=*&populate[service][populate]=*&populate[thumbnail]=*&populate[image]=*&populate[awards][populate]=*`,
    )

    return result.data
  },
}
