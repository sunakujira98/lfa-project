import {
  StrapiResponse,
  StrapiSingleResponse,
} from '@/domain/types/common.types'
import { Project } from '@/domain/types/project.types'
import { apiInstance } from './api'

const BASE_URL = '/projects'

export const ProjectApi = {
  getAll: async function (): Promise<StrapiResponse<Project>> {
    const result = await apiInstance.get<StrapiResponse<Project>>(
      `${BASE_URL}?populate=*`,
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
