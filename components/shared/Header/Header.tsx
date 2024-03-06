'use client'

import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useToggle } from '@/hooks/common/useToggle'
import { useCommonStore } from '@/store/common.store'

import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'

export function Header() {
  const [isOpen, menuMutation] = useToggle()
  const [showBg, setShowBg] = useState(false)
  const showBgRef = useRef(false)
  const navbarRef = useRef<HTMLElement>(null)

  // const currentSection = useCommonStore((state) => state.currentSection)
  // const setScrollToSection = useCommonStore((state) => state.setScrollToSection)
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

  // const onSetScrollToSection = (section: SectionName) => () => {
  //   setScrollToSection(section)
  // }

  return (
    <nav
      id='header'
      className={twMerge(
        'w-full z-50 fixed transition-all top-0 md:py-1 text-lfaWhite',
        showBg && 'bg-[#CCC0B4]',
      )}
    >
      <div className='hidden w-full container mx-auto md:flex flex-wrap items-center justify-between mt-0 bg-transparent'>
        <div className='md:flex md:items-center md:w-auto w-full order-3 md:order-1'>
          <nav>
            <ul className='md:flex items-center justify-between text-base text-gray-700 md:pt-0'>
              <li>
                <a
                  className='inline-block no-underline hover:text-black hover:underline py-2 text-3xl'
                  href='#'
                >
                  LFA
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='order-2 md:order-3 flex items-center'>
          <ul className='m-0 p-0 flex list-none items-center space-x-6 font-neue uppercase text-3xs'>
            <li className='relative whitespace-nowrap'>
              <a className='' href='/'>
                Home
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/projects'>
                Projects
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/about'>
                About
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/service'>
                Services
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/testimonial'>
                Testimonials
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/news'>
                News
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='outline-button' href='/contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-row justify-between md:hidden p-4 items-center'>
        <a
          className='inline-block no-underline hover:text-black hover:underline py-2 text-3xl'
          href='#'
        >
          LFA
        </a>
        <div className='flex flex-row items-center gap-4'>
          <a className='outline-button' href='/contact'>
            Contact
          </a>
          <HamburgerMenu active={isOpen} onClick={menuMutation.toggle} />
        </div>
      </div>
    </nav>
  )
}
