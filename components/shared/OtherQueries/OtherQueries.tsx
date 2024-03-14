'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function OtherQueries() {
  const { t } = useTranslation()
  return (
    <div className='md:py-10'>
      <div className='md:border-t-[1px] px-4 md:px-0'>
        <div className='flex flex-col md:flex-row py-20 md:py-10'>
          <div className='w-full md:w-1/3'></div>
          <div className='w-full md:w-2/3'>
            <div className='flex flex-col gap-6'>
              <h4>{t('queries.subtitle')}</h4>
              <a className='outline-button-black w-fit' href='/contact'>
                {t('queries.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
