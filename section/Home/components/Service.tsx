/* eslint-disable @next/next/no-img-element */

'use client'

import { Disclosure } from '@headlessui/react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { StrapiResponse } from '@/domain/types/common.types'
import { TService } from '@/domain/types/services.types'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import MinusIcon from '@/components/shared/svg/icons/MinusIcon'
import PlusIcon from '@/components/shared/svg/icons/PlusIcon'
import { twMerge } from 'tailwind-merge'
import { Link } from '@/components/shared/Link'

export function Service() {
  const { t } = useTranslation()
  const { lang } = useParams()

  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [activeService, setActiveService] = useState<string>('')
  const { data, isSuccess } = useGetAllServiceQuery()

  const onClickActive = (index: number, description: string) => {
    setActiveIndex(index)
    setActiveService(description)
  }

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TService>

  const services = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  const firstDescriptionToShow = services[0]?.attributes?.description

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto pt-10 px-4 lg:px-0'>
        <div className=' bg-greige lg:bg-beige'>
          <div className='px-4 lg:px-0 pt-10 pb-10 lg:pb-20 lg:pt-0'>
            <h6 className='uppercase neue-wide'>{t('services.title')}</h6>
          </div>
          <div className='flex justify-between gap-6'>
            <div className='w-1/3'>
              <div className='hidden lg:flex flex-col border-t-[1px]'>
                {services.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4' key={service.id}>
                      <button
                        className={twMerge(
                          activeIndex === service.id
                            ? 'bg-primary-900 text-greige'
                            : 'hover:bg-greige',
                          'w-full py-4 px-8 rounded-full',
                        )}
                        onClick={() =>
                          onClickActive(
                            service.id,
                            service.attributes.description,
                          )
                        }
                      >
                        <div className='flex justify-between items-center'>
                          <span className='font-neue text-xs font-normal leading-6 tracking-[0.16px]'>
                            {service.attributes.title}
                          </span>
                          {service.attributes.icon.data.attributes.url && (
                            <img
                              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
                              className='text-charcoal-1000'
                              alt={service.attributes.title}
                            />
                          )}
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='hidden lg:block lg:w-2/3'>
              <div className='border-t-[1px] border-l-[1px] rounded-tl-[40px] rounded-l-[0px] p-8 h-full border-charcoal-1000'>
                <p className='text-xs font-light leading-6 tracking-[0.16px]'>
                  {activeService ? activeService : firstDescriptionToShow}
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 lg:hidden'>
            <div className='flex flex-col border-t-[1px] w-full'>
              <div className='flex flex-col'>
                {services.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4' key={service.id}>
                      <Disclosure
                        defaultOpen={service.id === 1 || service.id === 29}
                      >
                        {({ open }) => (
                          <>
                            <div className='flex flex-row justify-between'>
                              <h4 className='vinila-tight'>
                                {service.attributes.title}
                              </h4>
                              <Disclosure.Button>
                                {open ? <MinusIcon /> : <PlusIcon />}
                              </Disclosure.Button>
                            </div>
                            <Disclosure.Panel>
                              <div className='py-4'>
                                <img
                                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
                                  className='text-charcoal-1000 w-8 h-8'
                                  alt={service.attributes.title}
                                />
                              </div>
                              <p className='neue-normal'>
                                {service.attributes.description}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='border-b-[1px] flex items-center justify-center py-12 neue-wide'>
            <Link href='/service'>
              <h6 className='uppercase'>{t('services.learnMore')}</h6>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}
