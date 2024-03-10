import { TContent } from './article.types'

export type TTncAttributes = {
  title: string
  description: TContent[]
}

export type TTnc = {
  id: number
  attributes: TTncAttributes
}
