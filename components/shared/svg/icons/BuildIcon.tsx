import React from 'react'

import { SvgProps } from '../svg.types'

const BuildIcon: React.FC<SvgProps> = ({ stroke }) => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M29.9905 29.5L24.0001 19.1244M29.9905 29.5L36.9905 41.5H11.0098L18.0098 29.5M29.9905 29.5H18.0098M29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244M24.0001 19.1244L31.0001 7L43.9905 29.5H18.0098M24.0001 19.1244L18.0098 29.5'
      stroke={stroke}
      strokeLinecap='square'
    />
  </svg>
)

export default BuildIcon
