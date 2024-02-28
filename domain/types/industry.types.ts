import { StrapiImageAttributes } from './common.types'

export type IndustryAttribute = {
  name: string
  createdAt: string //date
  updatedAt: string // date
}

export type Industry = {
  id: number
  attributes: IndustryAttribute
}
