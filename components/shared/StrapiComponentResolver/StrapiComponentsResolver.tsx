/* eslint-disable @typescript-eslint/no-explicit-any */

import { FullImage } from '@/components/shared/FullImage/FullImage'
import { LineByLineText } from '@/components/shared/LineByLineText'
import { SideBySideImage } from '@/components/shared/SideBySideImage'
import { Testimonial } from '@/components/shared/Testimonial'
import { ProjectDetail } from '@/domain/types/project.types'

import { ContentRenderer } from '../ContentRenderer/ContentRenderer'

type StrapiComponentsResolverProps = {
  detail: ProjectDetail[]
}

export function StrapiComponentResolver({
  detail,
}: StrapiComponentsResolverProps) {
  return (
    <div>
      {detail.map((componentDetail) => {
        switch (componentDetail.__component) {
          case 'text.1-line-1-font-text':
            return (
              <LineByLineText
                data={componentDetail as any}
                key={componentDetail.id}
              />
            )
          case 'text.paragraph':
            return (
              <ContentRenderer
                data={componentDetail as any}
                key={componentDetail.id}
              />
            )
          case 'images.full-image':
            return <FullImage data={componentDetail as any} />
          case 'images.side-by-side-image':
            return <SideBySideImage data={componentDetail as any} />
          case 'testimonial.testimonial-block':
            return <Testimonial data={{ attributes: componentDetail } as any} />
          default:
            break
        }
      })}
    </div>
  )
}
