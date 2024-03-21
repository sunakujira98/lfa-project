'use client'

import { useParams, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useLanguage } from '@/components/Provider'
import { PAGE_HAVE_BG } from '@/domain/constants/common.constants'
import { useRouter } from '@/hooks/common/useRouter'
import { useToggle } from '@/hooks/common/useToggle'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { useCommonStore } from '@/store/common.store'
import { containsValuesFromString } from '@/utils/ContainsValuesFromString/ContainsValuesFromString'

import { BigButton } from '../BigButton/BigButton'
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu'
import { Link } from '../Link'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../svg/icons'

export function Header() {
  const pathname = usePathname()
  const { lang } = useParams()

  const { t } = useTranslation()
  const router = useRouter()

  const [showBg, setShowBg] = useState(false)
  const showBgRef = useRef(false)
  const navbarRef = useRef<HTMLElement>(null)

  const { changeLanguage } = useLanguage()
  const [isOpen, menuMutation] = useToggle()

  const isChinese = lang.includes('zh')

  const isHaveBg =
    containsValuesFromString(pathname, PAGE_HAVE_BG) ||
    pathname === '/en-US' ||
    pathname === '/zh-CN'

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

  const onChangePage = (href: string) => {
    menuMutation.close()
    router.push(href)
  }

  // const onSetScrollToSection = (section: SectionName) => () => {
  //   setScrollToSection(section)
  // }

  return (
    <nav
      id='header'
      className={twMerge(
        'w-full z-10 fixed transition-all top-0 md:py-1 text-lfaWhite',
        isHaveBg ? 'text-lfaWhite' : 'text-charcoal-1000',
        showBg && 'bg-beige text-charcoal-1000',
        isOpen && 'bg-greige min-h-[100vh]',
      )}
    >
      <div className='hidden max-w-screen-xl container mx-auto md:flex flex-wrap items-center justify-between mt-0 bg-transparent'>
        <div className='md:flex md:items-center md:w-auto w-full order-3 md:order-1'>
          <nav>
            <ul className='md:flex items-center justify-between text-base text-gray-700 md:pt-0'>
              <li>
                <a
                  className='inline-block no-underline hover:text-black py-2 text-3xl'
                  href='/'
                >
                  LFA
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='order-2 md:order-3 flex items-center'>
          <ul className='m-0 p-0 flex list-none items-center gap-8 font-neue uppercase text-3xs font-thin'>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname === '/en-US' || pathname === '/zh-CN'
                    ? 'underline'
                    : '',
                )}
                href='/'
              >
                {t('header.home')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname.includes('projects') ? 'underline' : '',
                )}
                href='/projects'
              >
                {t('header.projects')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname.includes('about') ? 'underline' : '',
                )}
                href='/about'
              >
                {t('header.about')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname.includes('service') ? 'underline' : '',
                )}
                href='/service'
              >
                {t('header.services')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname.includes('testimonials') ? 'underline' : '',
                )}
                href='/testimonials'
              >
                {t('header.testimonials')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  pathname.includes('news') ? 'underline' : '',
                )}
                href='/news'
              >
                {t('header.news')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link
                className={twMerge(
                  'outline-button',
                  !isHaveBg && 'outline-button-black',
                  showBg && 'outline-button-black',
                )}
                href='/contact'
              >
                {t('header.contact')}
              </Link>
            </li>
            <li className='border-l-[1px] border-lfaWhite'>&nbsp;</li>
            <li className='relative whitespace-nowrap'>
              <button onClick={changeLanguage}>
                {isChinese ? 'EN' : '中文'}
              </button>
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
          href='/'
        >
          LFA
        </a>
        <div className='flex flex-row items-center gap-4'>
          {!isOpen && (
            <Link className='outline-button' href='/contact'>
              {t('header.contact')}
            </Link>
          )}
          <HamburgerMenu active={isOpen} onClick={menuMutation.toggle} />

          {isOpen && (
            <>
              <ul className='absolute -top-[13rem] left-0 flex w-full translate-y-full flex-col gap-1 px-5 py-7 md:hidden text-charcoal-1000'>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={twMerge(
                      'uppercase',
                      pathname === '/en-US' || pathname === '/zh-CN'
                        ? 'underline'
                        : '',
                    )}
                    onClick={() => onChangePage('/')}
                  >
                    {t('header.home')}
                  </button>
                </li>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/projects')}
                  >
                    {t('header.projects')}
                  </button>
                </li>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/about')}
                  >
                    {t('header.about')}
                  </button>
                </li>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/service')}
                  >
                    {t('header.services')}
                  </button>
                </li>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/testimonials')}
                  >
                    {t('header.testimonials')}
                  </button>
                </li>
                <li className='pb-4 uppercase border-b-[1px]'>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/news')}
                  >
                    {t('header.news')}
                  </button>
                </li>
              </ul>

              <div className='absolute bottom-0 left-0 w-full flex items-center flex-col md:hidden pb-4 gap-4 !text-gray-50 px-5'>
                <div className='w-full pb-3'>
                  <BigButton
                    active={true}
                    onClick={() => onChangePage('/contact')}
                    title={t('header.contact')}
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
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/privacy-policy')}
                  >
                    <h6 className='uppercase'>
                      {t('header.footer.privacyPolicy')}
                    </h6>
                  </button>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/terms-and-conditions')}
                  >
                    <h6 className='uppercase'>{t('header.footer.tnc')}</h6>
                  </button>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/faq')}
                  >
                    <h6 className='uppercase'>{t('header.footer.faq')}</h6>
                  </button>
                  <button
                    className={'uppercase'}
                    onClick={() => onChangePage('/sitemap')}
                  >
                    <h6 className='uppercase'>{t('header.footer.sitemap')}</h6>
                  </button>
                </div>
                <div className='flex flex-row'>
                  <h6>&copy; {t('footer.copyright')}</h6>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
