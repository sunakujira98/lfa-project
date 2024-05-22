import { TCommonAnswers } from './common.types'

export type TFAQAttribute = {
  title: string
  answers: TCommonAnswers[]
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TFAQAttribute
    }[]
  }
}

export type TFAQ = {
  id: number
  attributes: TFAQAttribute
}
