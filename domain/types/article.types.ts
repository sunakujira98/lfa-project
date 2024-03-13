import { AvailableComponents, StrapiImageAttributes } from './common.types'

export type ArticleDetail = {
  id: number
  __component: AvailableComponents
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
  content: TContent[]
  thumbnail?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
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
