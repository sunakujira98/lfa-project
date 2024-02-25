import { TestimonialApi } from '@/services/testimonial.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllTestimonialQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.TESTIMONIAL],
    queryFn: async () => {
      const response = await TestimonialApi.getAll()

      return response
    },
  })

  return query
}
