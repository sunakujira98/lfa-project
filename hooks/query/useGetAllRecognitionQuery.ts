import { RecognitionApi } from '@/services/recognition.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllRecognitionQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.RECOGNITION],
    queryFn: async () => {
      const response = await RecognitionApi.getAll()

      return response
    },
  })

  return query
}
