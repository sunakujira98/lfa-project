/* eslint-disable @next/next/no-img-element */

import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../svg/icons'

export function Footer() {
  return (
    <footer className='py-10 px-4 bg-charcoal-1000 md:pt-16 md:pb-6 overflow-x-hidden'>
      <div className='container mx-auto'>
        <div className='w-full flex flex-col md:flex-row gap-28'>
          <div className='flex-1 mb-6 text-black w-full md:w-auto'>
            <div className='flex flex-col'>
              <span className='text-charcoal-600 uppercase text-3xs'>
                FIND US ON INSTAGRAM
              </span>
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
                    Risk Management System
                  </span>
                  <div className='flex flex-col text-lfaWhite'>
                    <span className='text-xs font-thin'>bizSAFE Level 3</span>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='uppercase text-charcoal-600 text-3xs'>
                    Quality Management System
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
                Cultivating Growth Together
              </span>
              <div className='py-8'>
                <div className='py-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      Find Us At
                    </span>
                    <span className='text-lfaWhite font-light'>
                      283 River Valley Road
                    </span>
                    <span className='text-lfaWhite font-light'>
                      Singapore 238324
                    </span>
                    <span className='text-lfaWhite font-light'>
                      View on Google Maps
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      Stay Connected
                    </span>
                    <span className='text-lfaWhite font-light'>Facebook</span>
                    <span className='text-lfaWhite font-light'>Instagram</span>
                    <span className='text-lfaWhite font-light'>Linkedin</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-charcoal-600 uppercase text-3xs'>
                      Contact Us
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
                © 2023 LFA. All rights reserved.
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/privacy-policy'>
                privacy policy
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/terms-and-conditions'>
                terms & conditions
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='/faq'>
                frequently Asked questions
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#team'>
                sitemap
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#gallery'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                >
                  <path
                    d='M16 4V28'
                    stroke='#FFFAEF'
                    strokeWidth='1.33333'
                    strokeLinecap='square'
                  />
                  <path
                    d='M8 12L16 4L24 12'
                    stroke='#FFFAEF'
                    strokeWidth='1.33333'
                    strokeLinecap='square'
                  />
                </svg>
              </a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>

        {/* Mobile */}
        <div className='flex md:hidden flex-col gap-10'>
          <div>
            <h4 className='text-lfaWhite'>Cultivating Growth Together</h4>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>Find Us At</h6>
            <div className='flex flex-col'>
              <span className='text-2xs'>
                283 River Valley Road Singapore 238324
              </span>
              <span className='text-2xs text-lfaWhite underline'>
                View on Google Maps
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>Contact Us</h6>
            <span className='text-2xs text-lfaWhite underline'>
              enquiry@lfa.com.sg
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <h6 className='uppercase text-lfaWhite'>Risk Management System</h6>
            <span className='text-2xs underline'>bizSAFE Level 3</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h6 className='uppercase text-lfaWhite'>
                Quality Management System
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
              <h6 className='uppercase text-lfaWhite'>Stay Connected</h6>
            </div>
            <div className='flex flex-row gap-4'>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <FacebookIcon className='#FFFAEF' />
              </button>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <InstagramIcon className='#FFFAEF' />
              </button>
              <button className='border-lfaWhite border-[1px] rounded-lg p-[5px]'>
                <LinkedinIcon className='#FFFAEF' />
              </button>
            </div>
          </div>
          <nav className='md:hidden p-0 text-lfaWhite flex flex-col gap-10'>
            <ul className='m-0 p-0 flex flex-row items-center list-none gap-4 font-neue uppercase text-3xs'>
              <li className='relative whitespace-nowrap'>
                <a className='nav-link scrollto uppercase' href='#about'>
                  Privacy Policy
                </a>
              </li>
              <li className='relative whitespace-nowrap'>
                <a
                  className='nav-link scrollto uppercase'
                  href='/terms-and-conditions'
                >
                  T&CS
                </a>
              </li>
              <li className='relative whitespace-nowrap'>
                <a className='nav-link scrollto uppercase' href='/faq'>
                  FAQS
                </a>
              </li>
              <li className='relative whitespace-nowrap'>
                <a className='nav-link scrollto' href='#team'>
                  sitemap
                </a>
              </li>
            </ul>
            <ul className='m-0 p-0 flex flex-row justify-between items-center list-none gap-4 font-neue uppercase text-3xs '>
              <li className='relative whitespace-nowrap'>
                <a className='' href='#hero'>
                  © 2023 LFA. All rights reserved.
                </a>
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
