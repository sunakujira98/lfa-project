'use client'

import { useGetAllFaqQuery } from '@/hooks/query/useFaqQuery'

export function FaqSection() {
  const { data, isSuccess } = useGetAllFaqQuery()

  console.log('data', data)
}
