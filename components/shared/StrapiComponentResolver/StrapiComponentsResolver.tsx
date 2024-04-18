/* eslint-disable @typescript-eslint/no-explicit-any */

import { FullImage } from '@/components/shared/FullImage/FullImage'
import { LineByLineText } from '@/components/shared/LineByLineText'
import { SideBySideImage } from '@/components/shared/SideBySideImage'
import { Testimonial } from '@/components/shared/Testimonial'
import { ProjectDetail } from '@/domain/types/project.types'

import { ContentRenderer } from '../ContentRenderer/ContentRenderer'
import { SustainableMaterials } from '../SustainableMaterials'

type StrapiComponentsResolverProps = {
  detail: ProjectDetail[]
}

export function StrapiComponentResolver({
  detail,
}: StrapiComponentsResolverProps) {
  return (
    <div className='px-4 lg:px-0'>
      {detail.map((componentDetail) => {
        switch (componentDetail.__component) {
          case 'text.1-line-1-font-text':
            return (
              <LineByLineText
                data={componentDetail as any}
                key={`1-line-1-font-text-${componentDetail.id}`}
              />
            )
          case 'text.paragraph':
            return (
              <ContentRenderer
                data={componentDetail as any}
                key={`content-renderer-${componentDetail.id}`}
              />
            )
          case 'images.sustainable-materials':
            return (
              <SustainableMaterials
                data={componentDetail as any}
                key={`sustainable-materials-${componentDetail.id}`}
              />
            )
          case 'images.full-image':
            return (
              <FullImage
                data={componentDetail as any}
                key={`full-image-${componentDetail.id}`}
              />
            )
          case 'images.side-by-side-image':
            return (
              <SideBySideImage
                data={componentDetail as any}
                key={`side-by-side-${componentDetail.id}`}
              />
            )
          case 'testimonial.testimonial-block':
            return (
              <Testimonial
                data={{ attributes: componentDetail } as any}
                key={`testimonial-block-${componentDetail.id}`}
                shouldShowBorder
              />
            )
          default:
            break
        }
      })}
    </div>
  )
}
