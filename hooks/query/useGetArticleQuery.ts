import { TQueryParams } from '@/domain/types/common.types'
import { ArticleApi } from '@/services/articles.api'
import { useQuery } from '@tanstack/react-query'
import { EQueryKey } from './constants/react-query.constant'

export const useGetAllArticleQuery = (params?: TQueryParams) => {
  const query = useQuery({
    queryKey: [EQueryKey.ARTICLE],
    queryFn: async () => {
      const response = await ArticleApi.getAll(params)

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
