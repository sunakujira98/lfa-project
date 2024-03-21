import React from 'react'

import { SvgProps } from '../svg.types'

const ArrowRightUpIcon: React.FC<SvgProps> = ({ className, ...props }) => (
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
      d='M12.667 7.3335H24.667V19.3335'
      stroke='#333333'
      strokeWidth='0.666667'
      strokeLinecap='square'
    />
    <path
      d='M7.69629 24.3041L24.6668 7.3335'
      stroke='#333333'
      strokeWidth='0.666667'
      strokeLinecap='square'
    />
  </svg>
)

export default ArrowRightUpIcon
