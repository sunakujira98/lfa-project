import { AvailableComponents, StrapiImageDetails } from './common.types'
import { Award } from './award.types'
import { Industry } from './industry.types'
import { Service } from './services.types'

export type ProjectDetail = {
  id: number
  __component: AvailableComponents
}

export type ProjectAttribute = {
  title: string
  description: string
  createdAt: string // date
  updatedAt: string // date
  publishedAt: string // date
  isFeatured: boolean
  location: string
  completionDate: string // date
  thumbnail: {
    data: {
      id: number
      attributes: {
        name: string
        alternativeText: string
        caption: string
        width: number
        height: number
        formats: {
          large: StrapiImageDetails
        }
      }
    }
  }
  industry: {
    data: Industry
  }
  service: {
    data: Service
  }
  detail: ProjectDetail[]
  awards: {
    data: Award[]
  }
}

export type Project = {
  id: number
  attributes: ProjectAttribute
}
