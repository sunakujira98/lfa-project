import { StrapiImageAttributes } from './common.types'

export type ServiceAttribute = {
  title: string
  description: string
  icon: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
}

export type Service = {
  id: number
  attributes: ServiceAttribute
}
