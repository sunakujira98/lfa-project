'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className='flex justify-center items-center max-md:h-screen lg:mt-20 max-w-screen-xl mx-auto border-b-[1px] border-charcoal-100'>
      <div className='flex flex-col items-center'>
        <h1 className='font-keppler text-[40px] lg:text-6xl text-center lg:mb-[-50px]'>
          {t('aboutUs.paragraph.title')}
        </h1>
        <h1 className='text-[40px] lg:text-6xl text-center lg:mb-[-40px]'>
          {t('aboutUs.paragraph.spacesTo')}
        </h1>
        <h1 className='font-keppler text-[40px] lg:text-6xl text-center'>
          {t('aboutUs.paragraph.subtitle')}
        </h1>
        <p className='text-center w-[65%] neue-wide-text !normal-case'>
          {t('aboutUs.paragraph.description')}
        </p>
        <div className='flex justify-center items-center py-10 lg:py-20 neue-wide'>
          <a href='/about'>
            <h6 className='neue-wide text-gray-50'>{t('aboutUs.title')}</h6>
          </a>
        </div>
      </div>
    </div>
  )
}
