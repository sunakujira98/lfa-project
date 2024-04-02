import { TContent } from '@/domain/types/article.types'

type ContentRendererProps = {
  data: TContent[]
}

export function ContentRenderer({ data }: ContentRendererProps) {
  const resolveParagraph = (content: TContent) => {
    if (content.type === 'heading') {
      if (content.level === 1) {
        return <h1>{content.children[0].text}</h1>
      } else if (content.level === 2) {
        return <h2>{content.children[0].text}</h2>
      } else if (content.level === 3) {
        return <h3>{content.children[0].text}</h3>
      } else if (content.level === 4) {
        return <h4>{content.children[0].text}</h4>
      } else if (content.level === 5) {
        return <h5>{content.children[0].text}</h5>
      } else if (content.level === 6) {
        return <h6>{content.children[0].text}</h6>
      }
    } else if (content.type === 'paragraph') {
      if (content.children[0].text === '') {
        return null
      }
      return <p className='neue-normal'>{content.children[0].text}</p>
    }
  }

  return (
    <div className='flex flex-col gap-8'>
      {data.map((content, index) => {
        return <div key={index}>{resolveParagraph(content)}</div>
      })}
    </div>
  )
}
