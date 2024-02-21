import { StrapiImageAttributes } from './common.types'

export type ArticleAttribute = {
  title: string
  description: string
  thumbnail: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
}

export type Article = {
  id: number
  attributes: ArticleAttribute
}
