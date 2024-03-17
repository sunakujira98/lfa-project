'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function Hero() {
  const { t } = useTranslation()

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
              <span className='inline-block mb-[-50px]'>
                <div className='flex items-center'>
                  <h1 className='text-left text-3xl md:text-6xl font-keppler font-bold text-white'>
                    {t('hero.we')}
                  </h1>
                  <p>&nbsp;&nbsp;&nbsp;</p>
                  <h1 className='italic text-3xl md:text-6xl font-keppler font-thin text-white'>
                    {t('hero.designBuild')}
                  </h1>
                </div>
              </span>
              <span className='inline-block mb-[-30px]'>
                <div className='flex items-center'>
                  <h1 className='text-left text-3xl md:text-6xl font-neue text-white'>
                    {t('hero.spacesTo')}
                  </h1>
                </div>
              </span>
              <span className='inline-block'>
                <div className='flex items-center'>
                  <h1 className='italic text-3xl md:text-6xl font-keppler font-thin text-white'>
                    {t('hero.inspireNurture')}
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
