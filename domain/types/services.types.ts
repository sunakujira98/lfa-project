import { StrapiImageAttributes } from './common.types'

export type TServiceAttribute = {
  title: string
  description: string
  icon: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  activeIcon: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  image?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TServiceAttribute
    }[]
  }
  createdAt: string
}

export type TService = {
  id: number
  attributes: TServiceAttribute
}
