export function Footer() {
  return (
    <footer className='bg-charcoal-1000 pt-16 pb-6'>
      <div className='container mx-auto px-8'>
        <div className='w-full flex flex-col md:flex-row py-6 gap-28'>
          <div className='flex-1 mb-6 text-black'>
            <div className='flex flex-col'>
              <span className='text-charcoal-600 uppercase text-3xs'>
                FIND US ON INSTAGRAM
              </span>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3 pb-10 pt-2 gap-4'>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
                <div className='flex flex-row'>
                  <img
                    src='/images/instagram-1.png'
                    className='max-w-44 max-h-max-w-44 aspect-square'
                  />
                </div>
              </div>
              <div className='flex flex-row gap-40'>
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
          <div className='flex-1'>
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
        <nav className='p-0'>
          <ul className='m-0 p-0 flex flex-row items-center list-none gap-28 font-neue uppercase text-3xs text-lfaWhite'>
            <li className='relative whitespace-nowrap'>
              <a className='' href='#hero'>
                © 2023 LFA. All rights reserved.
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#about'>
                privacy policy
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#features'>
                terms & conditions
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#pricing'>
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
                    stroke-width='1.33333'
                    stroke-linecap='square'
                  />
                  <path
                    d='M8 12L16 4L24 12'
                    stroke='#FFFAEF'
                    stroke-width='1.33333'
                    stroke-linecap='square'
                  />
                </svg>
              </a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </footer>
  )
}
