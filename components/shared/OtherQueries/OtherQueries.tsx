'use client'

import { useTranslation } from '@/resources/i18n/i18n.hooks'

type OtherQueriesProps = {
  subtitle: string
}

export function OtherQueries({ subtitle }: OtherQueriesProps) {
  const { t } = useTranslation()
  return (
    <div className='lg:py-10'>
      <div className='lg:border-t-[1px] lg:px-0'>
        <div className='flex flex-col lg:flex-row pt-20 lg:pb-0 lg:py-10 lg:gap-14'>
          <div className='w-full lg:w-1/3'></div>
          <div className='w-full lg:w-2/3'>
            <div className='flex flex-col gap-20 lg:gap-6'>
              <h4>{subtitle}</h4>
              <a
                className='outline-button-black w-full lg:w-fit font-neue uppercase text-3xs font-thin text-center'
                href='/contact'
              >
                {t('queries.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
