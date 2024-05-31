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
    <div className='px-4 xl:px-0'>
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
          case 'text.project-text-title':
            return (
              <div
                className='relative container mx-auto py-10 flex items-center'
                style={{ maxWidth: '1680px' }}
              >
                <p className='neue-wide'>{componentDetail.title}</p>
              </div>
            )
          case 'text.project-text':
            return (
              <div
                className='relative container mx-auto py-10 flex items-center'
                style={{ maxWidth: '1680px' }}
              >
                <div className='flex flex-row'>
                  <div className='w-1/3'></div>
                  <div className='w-2/3'>
                    <p className='neue-normal'>{componentDetail.description}</p>
                  </div>
                </div>
              </div>
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
