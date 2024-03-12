export function Hero() {
  return (
    <div className='relative container mx-auto' style={{ maxWidth: '1680px' }}>
      <div className='relative overflow-hidden w-full'>
        <div
          className='h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
          style={{ backgroundImage: "url('/images/bg-hero.png')" }}
        >
          <div className='flex flex-col h-screen'>
            <div className='flex-1'></div>
            <div className='self-start px-2 md:px-20 py-10 ml-auto text-lfaWhite flex flex-col'>
              <span className='inline-block'>
                <div className='flex items-center'>
                  <h1 className='text-left text-3xl md:text-6xl font-keppler font-bold text-white'>
                    We
                  </h1>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                  <h1 className='italic text-3xl md:text-6xl font-keppler font-thin text-white'>
                    Design & Build
                  </h1>
                </div>
              </span>
              <span className='inline-block'>
                <div className='flex items-center'>
                  <h1 className='text-left text-3xl md:text-6xl font-neue text-white'>
                    Spaces To
                  </h1>
                </div>
              </span>
              <span className='inline-block'>
                <div className='flex items-center'>
                  <h1 className='italic text-3xl md:text-6xl font-keppler font-thin text-white'>
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
