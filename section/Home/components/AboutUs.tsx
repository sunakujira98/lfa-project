'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
      <div className='container flex justify-center'>
        <div className='flex items-center justify-center mx-auto w-full md:max-w-[65%]'>
          <div className='flex flex-col items-center'>
            <h1 className='font-keppler text-[40px] md:text-6xl text-center'>
              {t('aboutUs.paragraph.title')}
            </h1>
            <h1 className='text-[40px] md:text-6xl text-center'>
              {t('aboutUs.paragraph.subtitle')}
            </h1>
            <h1 className='font-keppler text-[40px] md:text-6xl text-center'>
              {t('aboutUs.paragraph.subtitle')}
            </h1>
            <p className='text-center'>{t('aboutUs.paragraph.description')}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center pt-10'>
        <a href='/about'>
          <h6 className='uppercase'>{t('aboutUs.title')}</h6>
        </a>
      </div>
    </div>
  )
}
