import { StrapiImageAttributes } from './common.types'

export type TestimonialAttribute = {
  fullName: string
  description?: string
  title?: string
  company?: string
  companyImage?: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
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
  locale: string
  localizations: {
    data: {
      id: number
      attributes: TestimonialAttribute
    }[]
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Testimonial = {
  id: number
  attributes: TestimonialAttribute
}
