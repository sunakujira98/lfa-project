import { StrapiImageAttributes } from './common.types'

export type TeamAttribute = {
  name: string
  position: string
  linkedin: string
  image?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
}

export type TTeam = {
  id: number
  attributes: TeamAttribute
}
