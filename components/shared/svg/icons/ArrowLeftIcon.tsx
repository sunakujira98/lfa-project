import React from 'react'

import { SvgProps } from '../svg.types'

const ArrowLeftIcon: React.FC<SvgProps> = ({ className, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    className={className}
    {...props}
  >
    <path
      d='M4 16H28'
      stroke='#464646'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
    <path
      d='M12 24L4 16L12 8'
      stroke='#464646'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
  </svg>
)

export default ArrowLeftIcon
