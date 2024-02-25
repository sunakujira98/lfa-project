'use client'

import { SectionName } from '@/domain/types/common.types'
import { useCommonStore } from '@/store/common.store'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [showBg, setShowBg] = useState(false)
  const showBgRef = useRef(false)
  const navbarRef = useRef<HTMLElement>(null)

  const currentSection = useCommonStore((state) => state.currentSection)
  const setScrollToSection = useCommonStore((state) => state.setScrollToSection)
  const setNavbarHeight = useCommonStore((state) => state.setNavbarHeight)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowBg(false)
        showBgRef.current = false
        return
      }

      if (!showBgRef.current && window.scrollY >= 0) {
        setShowBg(true)
        showBgRef.current = true
      }
    }

    setNavbarHeight(navbarRef.current?.offsetHeight || 0)

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSetScrollToSection = (section: SectionName) => () => {
    setScrollToSection(section)
  }

  return (
    <nav
      id='header'
      className={twMerge(
        'w-full z-50 fixed transition-all top-0 py-1 text-lfaWhite',
        showBg && 'bg-[#CCC0B4]',
      )}
    >
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 bg-transparent'>
        <label for='menu-toggle' className='cursor-pointer md:hidden block'>
          <svg
            className='fill-current text-gray-900'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </label>
        <input className='hidden' type='checkbox' id='menu-toggle' />

        <div
          className='hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1'
          id='menu'
        >
          <nav>
            <ul className='md:flex items-center justify-between text-base text-gray-700 md:pt-0'>
              <li>
                <a
                  className='inline-block no-underline hover:text-black hover:underline py-2 px-4 text-3xl'
                  href='#'
                >
                  LFA
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='order-2 md:order-3 flex items-center' id='nav-content'>
          <ul className='m-0 p-0 flex list-none items-center space-x-6 font-neue uppercase text-3xs'>
            <li className='relative whitespace-nowrap'>
              <a className='' href='#hero'>
                Home
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#about'>
                Projects
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#features'>
                About
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#pricing'>
                Services
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#team'>
                Testimonials
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#gallery'>
                News
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a
                className='nav-link scrollto border-[1px] px-4 py-1 border-lfaWhite rounded-full'
                href='#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
