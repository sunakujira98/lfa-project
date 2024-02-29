import { SVGAttributes } from 'react'

export interface SvgProps extends SVGAttributes<SVGElement> {
  spin?: boolean
  fillColor?: string
  className?: string
  width?: string
  height?: string
}
