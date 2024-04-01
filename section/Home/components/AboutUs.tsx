'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className='flex justify-center items-center max-md:h-screen lg:mt-[183px]'>
      <div className='mx-auto w-full lg:max-w-[65%]'>
        <div className='flex flex-col items-center'>
          <h1 className='font-keppler text-[40px] lg:text-6xl text-center lg:mb-[-30px]'>
            {t('aboutUs.paragraph.title')}
          </h1>
          <h1 className='text-[40px] lg:text-6xl text-center lg:mb-[-40px]'>
            {t('aboutUs.paragraph.spacesTo')}
          </h1>
          <h1 className='font-keppler text-[40px] lg:text-6xl text-center'>
            {t('aboutUs.paragraph.subtitle')}
          </h1>
          <p className='text-center w-[65%] neue-wide-text !normal-case'>
            {t('aboutUs.paragraph.homeDescription')}
          </p>
        </div>
        <div className='flex justify-center items-center py-[76px] neue-wide'>
          <a href='/about'>
            <h6 className='uppercase'>{t('aboutUs.title')}</h6>
          </a>
        </div>
      </div>
    </div>
  )
}
