/* eslint-disable @next/next/no-img-element */
'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

import { Link } from '../Link'
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../svg/icons'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='py-10 px-4 bg-charcoal-1000 md:pt-16 md:pb-6 overflow-x-hidden'>
      <div className='container mx-auto'>
        <div className='w-full flex flex-col md:flex-row gap-28'>
          <div className='flex-1 mb-6 text-black w-full md:w-auto'>
            <div className='flex flex-col'>
              <h6 className='text-charcoal-600 uppercase'>
                {t('footer.findUsOnInstagram')}
              </h6>
              <div className='grid grid-cols-2 md:grid-cols-3 pb-10 pt-2 gap-4'>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-[150px] max-h-[150px] max-h md:max-w-44 md:max-h-44 aspect-square'
                    alt='instagram'
                  />
                </div>
              </div>
              <div className='hidden md:flex flex-row gap-40'>
                <div className='flex flex-col gap-2'>
                  <span className='uppercase text-charcoal-600 text-3xs'>
                    {t('footer.riskManagementSystem')}
                  </span>
                  <div className='flex flex-col text-lfaWhite'>
                    <span className='text-xs font-thin'>bizSAFE Level 3</span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='uppercase text-charcoal-600 text-3xs'>
                    {t('footer.qualityManagementSystem')}
                  </span>
                  <div className='text-lfaWhite flex flex-col'>
                    <span className='text-xs font-thin'>ISO 9001 2015</span>
                    <span className='text-xs font-thin'>ISO 9001 2015</span>
                    <span className='text-xs font-thin'>ISO 9001 2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-1 w-full md:w-auto'>
            {/* Modified */}
            <div className='col-lg-6 col-md-6'>
              <span className='font-vinila text-2xl font-thin text-lfaWhite'>
                {t('footer.title')}
              </span>
              <div className='py-8'>
                <div className='py-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      {t('footer.findUs')}
                    </span>
                    <span className='text-lfaWhite font-light'>
                      283 River Valley Road
                    </span>
                    <span className='text-lfaWhite font-light'>
                      Singapore 238324
                    </span>
                    <span className='text-lfaWhite font-light'>
                      {t('footer.viewOnGoogleMaps')}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      {t('footer.stayConnected')}
                    </span>
                    <span className='text-lfaWhite font-light'>Facebook</span>
                    <span className='text-lfaWhite font-light'>Instagram</span>
                    <span className='text-lfaWhite font-light'>Linkedin</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      {t('footer.contactUs')}
                    </span>
                    <span className='text-lfaWhite font-light'>
                      enquiry@lfa.com.sg
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className='hidden md:block p-0'>
          <ul className='m-0 p-0 flex flex-row items-center list-none gap-28 font-neue uppercase text-3xs text-lfaWhite'>
            <li className='relative whitespace-nowrap'>
              <a className='' href='#hero'>
                &copy; {t('footer.copyright')}
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link className='nav-link scrollto' href='/privacy-policy'>
                {t('footer.privacyPolicy')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link className='nav-link scrollto' href='/terms-and-conditions'>
                {t('footer.termsAndConditions')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link className='nav-link scrollto' href='/faq'>
                {t('footer.faq')}
              </Link>
            </li>
            <li className='relative whitespace-nowrap'>
              <Link className='nav-link scrollto' href='#team'>
                {t('footer.sitemap')}
              </Link>
            </li>
            <li className='flex items-end justify-end relative whitespace-nowrap ml-auto'>
              <a className='nav-link scrollto' href='#gallery'>
                <ArrowUpIcon />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile */}
        <div className='flex md:hidden flex-col gap-10'>
          <div>
            <h4 className='text-lfaWhite'>{t('footer.title')}</h4>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>{t('footer.findUs')}</h6>
            <div className='flex flex-col'>
              <span className='text-2xs'>
                283 River Valley Road Singapore 238324
              </span>
              <span className='text-2xs text-lfaWhite underline'>
                {t('footer.viewOnGoogleMaps')}
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>{t('footer.contactUs')}</h6>
            <span className='text-2xs text-lfaWhite underline'>
              enquiry@lfa.com.sg
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>
              {t('footer.riskManagementSystem')}
            </h6>
            <span className='text-2xs underline'>bizSAFE Level 3</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h6 className='uppercase text-lfaWhite'>
                {t('footer.qualityManagementSystem')}
              </h6>
            </div>
            <div className='flex flex-col'>
              <span className='text-2xs'>ISO 9001 2015</span>
              <span className='text-2xs'>ISO 9001 2015</span>
              <span className='text-2xs'>ISO 9001 2015</span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h6 className='uppercase text-lfaWhite'>
                {t('footer.stayConnected')}
              </h6>
            </div>
            <div className='flex flex-row gap-4'>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <FacebookIcon className='text-[#FFFAEF]' />
              </button>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <InstagramIcon className='text-[#FFFAEF]' />
              </button>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <LinkedinIcon className='text-[#FFFAEF]' />
              </button>
            </div>
          </div>
          <nav className='md:hidden p-0 text-lfaWhite flex flex-col gap-10'>
            <ul className='m-0 p-0 flex flex-row items-center list-none gap-4 font-neue uppercase text-3xs'>
              <li className='relative whitespace-nowrap'>
                <Link
                  className='nav-link scrollto uppercase'
                  href='/privacy-policy'
                >
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li className='relative whitespace-nowrap'>
                <Link
                  className='nav-link scrollto uppercase'
                  href='/terms-and-conditions'
                >
                  {t('footer.termsAndConditions')}
                </Link>
              </li>
              <li className='relative whitespace-nowrap'>
                <Link className='nav-link scrollto uppercase' href='/faq'>
                  {t('footer.faq')}
                </Link>
              </li>
              <li className='relative whitespace-nowrap'>
                <Link className='nav-link scrollto' href='#team'>
                  {t('footer.sitemap')}
                </Link>
              </li>
            </ul>
            <ul className='m-0 p-0 flex flex-row justify-between items-center list-none gap-4 font-neue uppercase text-3xs '>
              <li className='relative whitespace-nowrap'>
                <Link className='' href='#hero'>
                  {t('footer.sitemap')}
                </Link>
              </li>
              <li className='relative whitespace-nowrap'>
                <a className='nav-link scrollto' href='#gallery'>
                  <ArrowUpIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
