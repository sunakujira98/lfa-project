/* eslint-disable @next/next/no-img-element */

'use client'

import { Disclosure } from '@headlessui/react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { CircleArrowDownIcon } from '@/components/shared/svg/icons'
import { StrapiResponse } from '@/domain/types/common.types'
import { TService } from '@/domain/types/services.types'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'
import MinusIcon from '@/components/shared/svg/icons/MinusIcon'
import PlusIcon from '@/components/shared/svg/icons/PlusIcon'

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
            <h6 className='uppercase'>{t('services.title')}</h6>
          </div>
          <div className='flex justify-between gap-6'>
            <div className='w-1/3'>
              <div className='hidden lg:flex flex-col border-t-[1px]'>
                {services.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4' key={service.id}>
                      <BigButton
                        active={activeIndex === service.id}
                        title={service.attributes.title}
                        icon={service.attributes.icon.data.attributes.url}
                        onClick={() =>
                          onClickActive(
                            service.id,
                            service.attributes.description,
                          )
                        }
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='hidden lg:block lg:w-2/3'>
              <div className='border-t-[1px] border-l-[1px] rounded-tl-[40px] rounded-l-[0px] p-8 h-full border-charcoal-1000'>
                <p>{activeService ? activeService : firstDescriptionToShow}</p>
              </div>
            </div>
          </div>
          <div className='px-4 lg:hidden'>
            <div className='flex flex-col border-t-[1px] w-full'>
              <div className='flex flex-col'>
                {services.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4' key={service.id}>
                      <Disclosure defaultOpen={service.id === 1}>
                        {({ open }) => (
                          <>
                            <div className='flex flex-row justify-between'>
                              <h4>{service.attributes.title}</h4>
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
                              <p>{service.attributes.description}</p>
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
          <div className='border-b-[1px] flex items-center justify-center py-12'>
            <a href='/service'>
              <h6 className='uppercase'>{t('services.learnMore')}</h6>
            </a>
          </div>
        </div>
      </div>
    )
  )
}
