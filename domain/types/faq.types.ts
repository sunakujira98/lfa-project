import { AvailableComponents } from './common.types'

export type TFAQAnswers = {
  id: number
  __component: AvailableComponents
  title: string
  content: {
    type: string
    children: {
      type: string
      text: string
    }[]
  }
}

export type TFAQAttribute = {
  title: string
  answers: TFAQAnswers[]
}

export type TFAQ = {
  id: number
  attributes: TFAQAttribute
}
