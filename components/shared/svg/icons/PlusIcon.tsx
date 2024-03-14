import React from 'react'

import { SvgProps } from '../svg.types'

const PlusIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      d='M16.04 6.66666L16.0156 25.3333'
      stroke='#333333'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
    <path
      d='M6.66602 16H25.3327'
      stroke='#333333'
      strokeWidth='1.33333'
      strokeLinecap='square'
    />
  </svg>
)

export default PlusIcon
