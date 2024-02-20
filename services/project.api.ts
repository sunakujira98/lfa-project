import { StrapiResponse } from '@/domain/types/common.types'
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
}
