/* eslint-disable @next/next/no-img-element */

'use client'

import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { CircleArrowDownIcon } from '../svg/icons'

export function Service() {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [activeService, setActiveService] = useState<string>('')
  const { data, isSuccess } = useGetAllServiceQuery()

  const onClickActive = (activeIndex: number, activeService: string) => {
    setActiveIndex(activeIndex)
    setActiveService(activeService)
  }

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto pt-10 px-4 md:px-0'>
        <div className='container bg-greige md:bg-greigeMultiply'>
          <div className='px-4 pt-10 pb-10 md:pb-20 md:pt-0'>
            <h6 className='uppercase'>Services</h6>
          </div>
          <div className='flex justify-between gap-6'>
            <div className='w-1/3'>
              <div className='hidden md:flex flex-col border-t-[1px]'>
                {data?.data?.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4' key={service.id}>
                      <button
                        className={twMerge(
                          activeIndex === service.id
                            ? 'bg-primary-900 text-greige'
                            : 'hover:bg-greige',
                          'w-full  p-4 rounded-full',
                        )}
                        onClick={() =>
                          onClickActive(
                            service.id,
                            service.attributes.description,
                          )
                        }
                      >
                        <div className='flex justify-between items-center'>
                          <span className='text-xs'>
                            {service.attributes.title}
                          </span>
                          <img
                            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
                            className='text-charcoal-1000'
                            alt={service.attributes.title}
                          />
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='hidden md:block md:w-2/3'>
              <div className='border-t-[1px] border-l-[1px] rounded-tl-[40px] rounded p-8 h-full'>
                <p>
                  {activeService
                    ? activeService
                    : data?.data?.[0]?.attributes.description}
                </p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className='px-4 md:hidden'>
            <div className='flex flex-col border-t-[1px] w-full'>
              <div className='flex flex-col'>
                {data?.data.map((service) => {
                  return (
                    <div className='border-b-[1px] py-4'>
                      <Disclosure defaultOpen={service.id === 1}>
                        <div className='flex flex-row justify-between'>
                          <h4>{service.attributes.title}</h4>
                          <Disclosure.Button>
                            <CircleArrowDownIcon />
                          </Disclosure.Button>
                        </div>
                        <Disclosure.Panel>
                          <img
                            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${service.attributes.icon.data.attributes.url}`}
                            className='text-charcoal-1000 py-4'
                            alt={service.attributes.title}
                          />
                          <p>{service.attributes.description}</p>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='border-b-[1px] flex items-center justify-center py-12'>
            <a href='/service'>
              <h6 className='uppercase'>Learn More</h6>
            </a>
          </div>
        </div>
      </div>
    )
  )
}
