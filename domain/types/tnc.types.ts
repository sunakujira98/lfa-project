import { TContent } from './article.types'

export type TTncAttributes = {
  title: string
  description: TContent[]
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TTncAttributes
    }[]
  }
}

export type TTnc = {
  id: number
  attributes: TTncAttributes
}
