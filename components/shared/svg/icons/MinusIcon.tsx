import React from 'react'

import { SvgProps } from '../svg.types'

const MinusIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      d='M7 16H25.6667'
      stroke='#333333'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
  </svg>
)

export default MinusIcon
