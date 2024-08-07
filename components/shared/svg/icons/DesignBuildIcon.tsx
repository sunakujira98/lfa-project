import React from 'react'

import { SvgProps } from '../svg.types'

const DesignBuildIcon: React.FC<SvgProps> = ({ className, stroke }) => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M15.6496 28.2381C12.221 25.6863 10 21.6025 10 17C10 9.26801 16.268 3 24 3C31.732 3 38 9.26801 38 17C38 21.5352 35.8435 25.5668 32.5 28.1252'
      stroke={stroke}
      strokeLinecap='square'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 17L44 44H4L24 17Z'
      stroke={stroke}
      strokeLinecap='square'
    />
  </svg>
)

export default DesignBuildIcon
