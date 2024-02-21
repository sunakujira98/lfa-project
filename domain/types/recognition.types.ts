import { StrapiImageAttributes } from './common.types'

export type RecognitionAttribute = {
  title: string
  description: string
  image: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
}

export type Recognition = {
  id: number
  attributes: RecognitionAttribute
}
