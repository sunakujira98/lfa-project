import { FullImage } from '@/components/shared/FullImage/FullImage'
import { LineByLineText } from '@/components/shared/LineByLineText'
import { ProjectDetail } from '@/domain/types/project.types'

type ProjectComponentResolverProps = {
  detail: ProjectDetail[]
}

export function ProjectComponentResolver({
  detail,
}: ProjectComponentResolverProps) {
  return (
    <div>
      {detail.map((componentDetail) => {
        if (componentDetail.__component === 'text.1-line-1-font-text') {
          return (
            <LineByLineText
              data={componentDetail as any}
              key={componentDetail.id}
            />
          )
        } else if (componentDetail.__component === 'images.full-image') {
          return <FullImage data={componentDetail as any} />
        }
      })}
    </div>
  )
}
