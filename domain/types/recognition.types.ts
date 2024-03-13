import { StrapiImageAttributes } from './common.types'

export type TRecognitionAttribute = {
  title: string
  description: string
  image: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  externalLink: string
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TRecognitionAttribute
    }[]
  }
  createdAt: string
}

export type TRecognition = {
  id: number
  localeId?: number
  attributes: TRecognitionAttribute
}
