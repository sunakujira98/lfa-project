import React from 'react'

import { SvgProps } from '../svg.types'

const ArrowUpIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      d='M16 4V28'
      stroke='#FFFAEF'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
    <path
      d='M8 12L16 4L24 12'
      stroke='#FFFAEF'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
  </svg>
)

export default ArrowUpIcon
