import { StrapiImageAttributes, StrapiImageDetails } from './common.types'

export type ClientAttribute = {
  clientName: string
  image: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
}

export type Client = {
  id: number
  attributes: ClientAttribute
}
