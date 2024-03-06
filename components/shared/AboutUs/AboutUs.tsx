export function AboutUs() {
  return (
    <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
      <div className='container flex justify-center'>
        <div className='flex items-center justify-center mx-auto w-full md:max-w-[65%]'>
          <div className='flex flex-col items-center'>
            <h1 className='font-keppler text-[40px] md:text-6xl'>
              We Design & Build
            </h1>
            <h1 className='text-[40px] md:text-6xl'>Spaces To</h1>
            <h1 className='font-keppler text-[40px] md:text-6xl'>
              Inspire & Nurture
            </h1>
            <p className='text-center'>
              As an award-winning Design & Build Studio in Singapore, we
              collaborate with local businesses to craft exceptional work and
              commercial spaces. Our expertise lies in creating commercial
              offices that not only stand out in design but also inspire
              meaningful social interaction and foster strong communal bonds.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center pt-10'>
        <a href='/about'>
          <h6 className='uppercase'>About Us</h6>
        </a>
      </div>
    </div>
  )
}
