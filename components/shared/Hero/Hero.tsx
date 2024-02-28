export function Hero() {
  return (
    <div className='relative container mx-auto' style={{ maxWidth: '1680px' }}>
      <div className='relative overflow-hidden w-full'>
        <div
          className='block h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
          style={{ backgroundImage: "url('/images/bg-hero.png')" }}
        >
          <div className='container mx-auto pt-[350px] px-4'>
            <div className='flex flex-col'>
              <span className='inline-block mb-[-60px]'>
                <div className='flex items-center'>
                  <h1 className='text-left text-6xl font-keppler font-bold text-white'>
                    We
                  </h1>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <h1 className='italic text-6xl font-keppler font-thin text-white'>
                    Design & Build
                  </h1>
                </div>
              </span>
              <span className='inline-block mb-[-40px]'>
                <div className='flex items-center'>
                  <h1 className='text-left text-6xl font-neue text-white'>
                    Spaces To
                  </h1>
                </div>
              </span>
              <span className='inline-block'>
                <div className='flex items-center'>
                  <h1 className='italic text-6xl font-keppler font-thin text-white'>
                    Inspire & Nurture
                  </h1>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
