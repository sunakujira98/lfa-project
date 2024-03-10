import { TContent } from './article.types'

export type TPrivacyPolicyAttribute = {
  title: string
  description: TContent[]
}

export type TPrivacyPolicy = {
  id: number
  attributes: TPrivacyPolicyAttribute
}
