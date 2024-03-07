import { NewsDetail } from '../components'

type Props = {
  params: {
    newsId: string
  }
}
export default async function NewsDetailpage({ params: { newsId } }: Props) {
  return <NewsDetail newsId={newsId} />
}
