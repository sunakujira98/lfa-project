import { TArticleFilter } from '@/domain/types/article.types'
import { TQueryParams } from '@/domain/types/common.types'
import { ArticleApi } from '@/services/articles.api'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
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

export const useGetInfiniteArticleQuery = (data: TArticleFilter) => {
  const { limit, start, sort } = data
  const query = useInfiniteQuery({
    queryKey: [
      EQueryKey.ARTICLE,
      {
        limit,
        start,
        sort,
      },
    ],
    queryFn: async ({ pageParam }) => {
      const response = await ArticleApi.getWithFilter({
        ...data,
        start: pageParam,
        limit,
      })

      return response
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (
        lastPage.meta.pagination.total <=
          lastPage.meta.pagination.limit *
            Math.max(lastPage.meta.pagination.start, 1) ||
        allPages?.[0]?.meta?.pagination?.total <
          lastPage.meta.pagination.limit *
            Math.max(lastPage.meta.pagination.start, 1)
      ) {
        return undefined
      }
      return lastPage.meta.pagination.start + (limit || 6)
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
