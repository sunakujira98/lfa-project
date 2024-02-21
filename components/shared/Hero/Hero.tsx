export function Hero() {
  return (
    <div
      className='h-screen bg-cover bg-center py-[350px] px-20'
      style={{ backgroundImage: "url('/images/bg-hero.png')" }}
    >
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
  )
}
