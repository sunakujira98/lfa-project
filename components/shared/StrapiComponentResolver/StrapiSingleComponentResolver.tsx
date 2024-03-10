/* eslint-disable @typescript-eslint/no-explicit-any */

import { ContentRenderer } from '../ContentRenderer/ContentRenderer'
import { FullImage } from '../FullImage/FullImage'
import { LineByLineText } from '../LineByLineText'
import { SideBySideImage } from '../SideBySideImage'
import { Testimonial } from '../Testimonial'

type StrapiSingleComponentResolverProps = {
  componentDetail: string
  data: any
}

export function StrapiSingleComponentResolver({
  componentDetail,
  data,
}: StrapiSingleComponentResolverProps) {
  // console.log('componentDetail', componentDetail)
  // console.log('data', data)
  switch (componentDetail) {
    case 'text.1-line-1-font-text':
      return <LineByLineText data={data as any} />
    case 'text.paragraph':
      return <ContentRenderer data={data as any} />
    case 'images.full-image':
      return <FullImage data={data as any} />
    case 'images.side-by-side-image':
      return <SideBySideImage data={data as any} />
    case 'testimonial.testimonial-block':
      return <Testimonial data={{ attributes: data } as any} />
    default:
      return <div></div>
  }
}
