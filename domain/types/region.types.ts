import { StrapiImageAttributes } from './common.types'

export type RegionAttribute = {
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string // date
}

export type Region = {
  id: number
  attributes: RegionAttribute
}
