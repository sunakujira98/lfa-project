import React from 'react'

import { SvgProps } from '../svg.types'

const ProjectProcurementIcon: React.FC<SvgProps> = ({ stroke }) => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z'
      stroke={stroke}
    />
    <path d='M28 6L6 28' stroke={stroke} strokeLinecap='square' />
    <path d='M42 20L20 42' stroke={stroke} strokeLinecap='square' />
    <path d='M40 8L8 40' stroke={stroke} strokeLinecap='square' />
    <path d='M12 22L19 29' stroke={stroke} strokeLinecap='square' />
    <path d='M29 19L36 26' stroke={stroke} strokeLinecap='square' />
  </svg>
)

export default ProjectProcurementIcon
