import React from 'react'

import { SvgProps } from '../svg.types'

const InstagramIcon: React.FC<SvgProps> = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='17'
    viewBox='0 0 17 17'
    fill='none'
    {...props}
  >
    <path
      d='M5.86667 1.72754H11.4667C13.6 1.72754 15.3333 3.46087 15.3333 5.59421V11.1942C15.3333 12.2197 14.926 13.2032 14.2008 13.9284C13.4757 14.6535 12.4922 15.0609 11.4667 15.0609H5.86667C3.73333 15.0609 2 13.3275 2 11.1942V5.59421C2 4.5687 2.40738 3.5852 3.13252 2.86006C3.85766 2.13492 4.84116 1.72754 5.86667 1.72754ZM5.73333 3.06087C5.09681 3.06087 4.48636 3.31373 4.03628 3.76382C3.58619 4.2139 3.33333 4.82435 3.33333 5.46087V11.3275C3.33333 12.6542 4.40667 13.7275 5.73333 13.7275H11.6C12.2365 13.7275 12.847 13.4747 13.2971 13.0246C13.7471 12.5745 14 11.9641 14 11.3275V5.46087C14 4.13421 12.9267 3.06087 11.6 3.06087H5.73333ZM12.1667 4.06087C12.3877 4.06087 12.5996 4.14867 12.7559 4.30495C12.9122 4.46123 13 4.67319 13 4.89421C13 5.11522 12.9122 5.32718 12.7559 5.48346C12.5996 5.63974 12.3877 5.72754 12.1667 5.72754C11.9457 5.72754 11.7337 5.63974 11.5774 5.48346C11.4211 5.32718 11.3333 5.11522 11.3333 4.89421C11.3333 4.67319 11.4211 4.46123 11.5774 4.30495C11.7337 4.14867 11.9457 4.06087 12.1667 4.06087ZM8.66667 5.06087C9.55072 5.06087 10.3986 5.41206 11.0237 6.03718C11.6488 6.6623 12 7.51015 12 8.39421C12 9.27826 11.6488 10.1261 11.0237 10.7512C10.3986 11.3763 9.55072 11.7275 8.66667 11.7275C7.78261 11.7275 6.93476 11.3763 6.30964 10.7512C5.68452 10.1261 5.33333 9.27826 5.33333 8.39421C5.33333 7.51015 5.68452 6.6623 6.30964 6.03718C6.93476 5.41206 7.78261 5.06087 8.66667 5.06087ZM8.66667 6.39421C8.13623 6.39421 7.62753 6.60492 7.25245 6.97999C6.87738 7.35506 6.66667 7.86377 6.66667 8.39421C6.66667 8.92464 6.87738 9.43335 7.25245 9.80842C7.62753 10.1835 8.13623 10.3942 8.66667 10.3942C9.1971 10.3942 9.70581 10.1835 10.0809 9.80842C10.456 9.43335 10.6667 8.92464 10.6667 8.39421C10.6667 7.86377 10.456 7.35506 10.0809 6.97999C9.70581 6.60492 9.1971 6.39421 8.66667 6.39421Z'
      fill='#FFFAEF'
    />
  </svg>
)

export default InstagramIcon
