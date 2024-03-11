'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useToggle } from '@/hooks/common/useToggle'
import { useCommonStore } from '@/store/common.store'

import { BigButton } from '../BigButton/BigButton'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../svg/icons'

export function Header() {
  const router = useRouter()
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

  const onContactClick = () => {
    menuMutation.close()
    router.push('/contact')
  }

  // const onSetScrollToSection = (section: SectionName) => () => {
  //   setScrollToSection(section)
  // }

  return (
    <nav
      id='header'
      className={twMerge(
        'w-full z-10 fixed transition-all top-0 md:py-1 text-lfaWhite',
        showBg && 'bg-[#CCC0B4]',
        isOpen && 'bg-greige min-h-[100vh]',
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

      <div
        className={twMerge(
          'flex flex-row justify-between md:hidden p-4 items-center',
          isOpen && 'text-charcoal-1000',
        )}
      >
        <a
          className='inline-block no-underline hover:text-black hover:underline py-2 text-3xl'
          href='#'
        >
          LFA
        </a>
        <div className='flex flex-row items-center gap-4'>
          {!isOpen && (
            <a className='outline-button' href='/contact'>
              Contact
            </a>
          )}
          <HamburgerMenu active={isOpen} onClick={menuMutation.toggle} />

          {isOpen && (
            <>
              <ul className='absolute -top-[21rem] left-0 flex w-full translate-y-full flex-col gap-1 px-5 py-7 md:hidden text-charcoal-1000'>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <h6>Home</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>Projects</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>About</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>Services</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>Testimonials</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>News</h6>
                </li>
                <li className='py-4 uppercase border-b-[1px]'>
                  <h6>Projects</h6>
                </li>
              </ul>

              <div className='absolute bottom-0 left-0 w-full flex items-center flex-col md:hidden pb-4 gap-4 !text-gray-50 px-5'>
                <div className='w-full pb-3'>
                  <BigButton
                    active={true}
                    onClick={onContactClick}
                    title='CONTACT'
                  />
                </div>

                <div className='flex flex-row gap-4 flex-grow'>
                  <a
                    href='#'
                    className='border-[1px] border-charcoal-1000 rounded-lg'
                  >
                    <FacebookIcon className='w-7 h-7 p-1 text-gray-50' />
                  </a>
                  <a
                    href='#'
                    className='border-[1px] border-charcoal-1000 rounded-lg'
                  >
                    <InstagramIcon className='w-7 h-7 p-1 text-gray-50' />
                  </a>
                  <a
                    href='#'
                    className='border-[1px] border-charcoal-1000 rounded-lg'
                  >
                    <LinkedinIcon className='w-7 h-7 p-1 text-gray-50' />
                  </a>
                </div>
                <div className='flex flex-row gap-4'>
                  <a href='/privacy-policy'>
                    <h6 className='uppercase'>Privacy Policy</h6>
                  </a>
                  <a href='/privacy-policy'>
                    <h6 className='uppercase'>T&CS</h6>
                  </a>
                  <a href='/privacy-policy'>
                    <h6 className='uppercase'>FAQS</h6>
                  </a>
                  <a href='/privacy-policy'>
                    <h6 className='uppercase'>SITEMAP</h6>
                  </a>
                </div>
                <div className='flex flex-row'>
                  <h6>&copy; 2023 LFA. All rights reserved.</h6>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
