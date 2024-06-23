'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function Hero() {
  const { t } = useTranslation()

  return (
    <>
      <div className='h-[95vh] lg:h-screen hidden pt-6 lg:pt-0 lg:items-center absolute inset-0 md:flex'>
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover'
          poster='/images/bg-hero.png'
        >
          <source src='/videos/about-us-hero.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='h-[95vh] lg:h-screen flex pt-6 lg:pt-0 lg:items-center absolute inset-0 md:hidden'>
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover'
          poster='/images/bg-hero.png'
        >
          <source src='/videos/bg-hero.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='flex flex-col h-[95vh] lg:h-screen max-w-screen-xl mx-auto relative z-2'>
        <div className='flex-1'></div>
        <div className='self-start lg:py-10 text-lfaWhite flex flex-col w-full px-4 lg:px-0'>
          <span className='inline-block lg:mb-[-50px]'>
            <div className='flex items-center h-full'>
              <h1 className='text-left text-3xl lg:text-6xl font-keppler font-bold text-white'>
                {t('hero.we')}
              </h1>
              <p>&nbsp;&nbsp;&nbsp;</p>
              <div className='h-16 lg:h-32'>
                <div className=''>
                  <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                    {t('hero.designBuild')}
                  </h1>

                </div>
              </div>
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
            <div className='words overflow-hidden h-16 lg:h-32 mt-5'>
              <div className='animate-words'>
                <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                  {t('hero.inspireNurture')}
                </h1>
                <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                  {t('hero.connectTransform')}
                </h1>
                <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                  {t('hero.fosterCultivative')}
                </h1>
                <h1 className='italic text-3xl lg:text-6xl font-keppler font-thin text-white'>
                  {t('hero.inspireNurture')}
                </h1>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}
