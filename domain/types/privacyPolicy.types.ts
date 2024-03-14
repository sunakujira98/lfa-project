import { TContent } from './article.types'

export type TPrivacyPolicyAttribute = {
  title: string
  description: TContent[]
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TPrivacyPolicyAttribute
    }[]
  }
}

export type TPrivacyPolicy = {
  id: number
  attributes: TPrivacyPolicyAttribute
}
