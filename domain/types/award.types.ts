import { StrapiImageAttributes } from './common.types'

export type AwardAttribute = {
  awardName: string
  image: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
}

export type Award = {
  id: number
  attributes: AwardAttribute
}
