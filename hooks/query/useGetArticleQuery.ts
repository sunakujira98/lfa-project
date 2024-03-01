import { ArticleApi } from '@/services/articles.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllArticleQuery = () => {
  const query = useQuery({
    queryKey: [EQueryKey.ARTICLE],
    queryFn: async () => {
      const response = await ArticleApi.getAll()

      return response
    },
  })

  return query
}

export const useGetArticleByIdQuery = (id: string) => {
  const query = useQuery({
    queryKey: [EQueryKey.ARTICLE, id],
    queryFn: async () => {
      const response = await ArticleApi.getById(id)

      return response
    },
  })

  return query
}
