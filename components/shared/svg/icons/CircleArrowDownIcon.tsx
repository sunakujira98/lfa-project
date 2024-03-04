import React from 'react'

import { SvgProps } from '../svg.types'

const CircleArrowDownIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      d='M15.9993 29.3333C23.3631 29.3333 29.3327 23.3638 29.3327 16C29.3327 8.63621 23.3631 2.66667 15.9993 2.66667C8.63555 2.66667 2.66602 8.63621 2.66602 16C2.66602 23.3638 8.63555 29.3333 15.9993 29.3333Z'
      stroke='#464646'
      strokeWidth='0.666667'
    />
    <path
      d='M22 14L16 20L10 14'
      stroke='#464646'
      strokeWidth='0.666667'
      strokeLinecap='square'
    />
  </svg>
)

export default CircleArrowDownIcon
