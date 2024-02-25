import { StrapiResponse } from '@/domain/types/common.types'
import { Testimonial } from '@/domain/types/testimonial.types'

import { apiInstance } from './api'

const BASE_URL = '/testimonials'

export const TestimonialApi = {
  getAll: async function (): Promise<StrapiResponse<Testimonial>> {
    const result = await apiInstance.get<StrapiResponse<Testimonial>>(
      `${BASE_URL}?populate=*`,
    )

    return result.data
  },
}
