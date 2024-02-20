import { StrapiImageDetails } from './common.types'

export type ProjectAttribute = {
  title: string
  description: string
  createdAt: string // date
  updatedAt: string // date
  publishedAt: string // date
  isFeatured: boolean
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
}

export type Project = {
  id: number
  attributes: ProjectAttribute
}
