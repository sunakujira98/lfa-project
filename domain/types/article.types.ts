import {
  AvailableComponents,
  SortParams,
  StrapiImageAttributes,
} from './common.types'

export type ArticleDetail = {
  id: number
  __component: AvailableComponents
}

export type TArticleFilter = {
  limit?: number
  start?: number
  sort?: SortParams
}

export type TContent = {
  type: 'heading' | 'paragraph' | 'text'
  children: {
    type: string
    text: string
  }[]
  level?: number
}

export type ArticleAttribute = {
  title: string
  shortDescription?: string
  content: string
  thumbnail?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
  publishedDate: string
  locale: string
  localizations: {
    data: {
      id: number
      attributes: ArticleAttribute
    }[]
  }
}

export type Article = {
  id: number
  localeId?: number
  attributes: ArticleAttribute
}
