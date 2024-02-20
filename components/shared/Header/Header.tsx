export function Header() {
  return (
    <header className='max-w-screen-xl h-24 transition-all duration-500 z-50 fixed top-0 left-0 right-0 mx-auto bg-transparent py-6'>
      <div className='container flex items-center justify-between'>
        <div>
          <h1 className='font-neue inline-block uppercase'>
            <a href='index.html' className='text-white'>
              Avilon
            </a>
          </h1>
        </div>
        <nav className='p-0'>
          <ul className='m-0 p-0 flex list-none items-center space-x-6 font-neue uppercase text-3xs'>
            <li className='relative whitespace-nowrap'>
              <a className='' href='#hero'>
                Home
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#about'>
                About
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#features'>
                Features
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#pricing'>
                Pricing
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#team'>
                Team
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#gallery'>
                Gallery
              </a>
            </li>
            <li className='relative whitespace-nowrap'>
              <a className='nav-link scrollto' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>
  )
}
