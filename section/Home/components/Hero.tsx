'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function Hero() {
  const { t } = useTranslation()

  return (
    <>
      <div
        className='h-screen flex pt-6 lg:pt-0 lg:items-center bg-cover bg-center absolute inset-0'
        style={{
          backgroundImage: "url('/images/bg-hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className='flex flex-col h-screen max-w-screen-xl mx-auto relative z-10'>
        <div className='flex-1'></div>
        <div className='self-start py-10 text-lfaWhite flex flex-col w-full'>
          <span className='inline-block lg:mb-[-50px]'>
            <div className='flex items-center'>
              <h1 className='text-left text-3xl lg:text-6xl font-keppler font-bold text-white'>
                {t('hero.we')}
              </h1>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                {t('hero.designBuild')}
              </h1>
            </div>
          </span>
          <span className='inline-block lg:mb-[-30px]'>
            <div className='flex items-center'>
              <h1 className='text-left text-3xl lg:text-6xl font-neue text-white'>
                {t('hero.spacesTo')}
              </h1>
            </div>
          </span>
          <span className='inline-block pb-10 lg:pb-0'>
            <div className='flex items-center'>
              <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                {t('hero.inspireNurture')}
              </h1>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}
