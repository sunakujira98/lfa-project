import React from 'react'

import { SvgProps } from '../svg.types'

const EmailIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    {...props}
  >
    <path
      d='M11.5 15.7929L0.5 26.7929V4.5H11.5V15.7929ZM31.5 15.7929L20.5 26.7929V4.5H31.5V15.7929Z'
      stroke='#464646'
    />
  </svg>
)

export default EmailIcon
