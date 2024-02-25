import { StrapiImageAttributes } from './common.types'

export type TestimonialAttribute = {
  fullName: string
  description: string
  titleCompany: string
  companyImage: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  video: {
    data: {
      id: number
      attributes: StrapiImageAttributes
    }
  }
  createdAt: string
}

export type Testimonial = {
  id: number
  attributes: TestimonialAttribute
}
