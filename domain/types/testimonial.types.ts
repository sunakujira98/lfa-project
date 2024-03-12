import { StrapiImageAttributes } from './common.types'

export type TestimonialAttribute = {
  fullName: string
  description?: string
  title?: string
  company?: string
  image?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  video?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Testimonial = {
  id: number
  attributes: TestimonialAttribute
}
