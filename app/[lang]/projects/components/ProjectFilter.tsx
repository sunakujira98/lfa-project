'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import MinusIcon from '@/components/shared/svg/icons/MinusIcon'
import PlusIcon from '@/components/shared/svg/icons/PlusIcon'
import { useGetAllIndustryQuery } from '@/hooks/query/useIndustryQuery'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

type ProjectFilterProps = {
  onChangeIndustryQuery: (value?: number | undefined) => void
  onChangeServiceQuery: (value?: number | undefined) => void
  onChangeRegionQuery: (value?: number | undefined) => void
  onChangeHasVideoQuery: (value: boolean) => void
  onChangeIsAwardWinning: (value: boolean) => void
  industryId: string
  serviceId: string
  hasVideo: string
  isAwardWinning: string
}

export function ProjectFilter({
  onChangeIndustryQuery,
  onChangeServiceQuery,
  onChangeHasVideoQuery,
  onChangeIsAwardWinning,
  industryId,
  serviceId,
  hasVideo,
  isAwardWinning,
}: ProjectFilterProps) {
  const { t } = useTranslation()
  const { data: industries, isSuccess: isSuccessIndustry } =
    useGetAllIndustryQuery()
  const { data: services, isSuccess: isSuccessService } =
    useGetAllServiceQuery()

  const [selectedIndustry, setSelectedIndustry] = useState<string | undefined>(
    undefined,
  )
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined,
  )

  const hasFilter =
    selectedIndustry !== undefined ||
    selectedService !== undefined ||
    (hasVideo !== '' && hasVideo !== 'false') ||
    (isAwardWinning !== '' && isAwardWinning !== 'false')

  useEffect(() => {
    if (isSuccessIndustry) {
      setSelectedIndustry(
        industries?.data?.find(
          (industry) => industry.id === parseInt(industryId, 10),
        )?.attributes.name,
      )
    }
  }, [isSuccessIndustry, industryId, industries?.data])

  useEffect(() => {
    if (isSuccessService) {
      setSelectedService(
        services?.data?.find(
          (service) => service.id === parseInt(serviceId, 10),
        )?.attributes.title,
      )
    }
  }, [isSuccessService, serviceId, services?.data])

  const onSetSelectedIndustry = (industryName: string) => {
    setSelectedIndustry(industryName)
  }

  const onSetSelectedService = (serviceName: string) => {
    setSelectedService(serviceName)
  }

  return (
    <>
      <div className='hidden lg:flex lg:justify-between lg:items-center pb-10'>
        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <Menu as='div' className='relative inline-block text-left'>
            <div className='py-4'>
              {selectedIndustry ? (
                <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm px-3 py-2 font-light bg-charcoal-1000 text-2xs uppercase text-lfaWhite'>
                  {selectedIndustry}
                  <ChevronDownIcon
                    className='-mr-1 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Menu.Button>
              ) : (
                <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm bg-transparent px-3 py-2 font-light hover:bg-greige hover:text-gray-50 text-2xs neue-wide'>
                  INDUSTRIES
                  <ChevronDownIcon
                    className='-mr-1 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Menu.Button>
              )}
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 z-10 ml-1 w-56 origin-top-right rounded-sm bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          onChangeIndustryQuery(undefined)
                          onSetSelectedIndustry('')
                        }}
                        className={twMerge(
                          active && 'bg-greige text-gray-900',
                          'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                        )}
                      >
                        {t('featuredProject.filterAll')}
                      </button>
                    )}
                  </Menu.Item>
                  {industries?.data.map((industry) => {
                    return (
                      <Menu.Item key={industry.id}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              onChangeIndustryQuery(industry.id)
                              onSetSelectedIndustry(industry.attributes.name)
                            }}
                            className={twMerge(
                              active && 'bg-greige text-gray-900',
                              'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                            )}
                          >
                            {industry.attributes.name}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as='div' className='relative inline-block text-left'>
            <div className='py-4'>
              {selectedService ? (
                <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm px-3 py-2 font-light bg-charcoal-1000 text-2xs uppercase text-lfaWhite'>
                  {selectedService}
                  <ChevronDownIcon
                    className='-mr-1 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Menu.Button>
              ) : (
                <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm bg-transparent px-3 py-2 hover:bg-greige hover:text-gray-50 neue-wide'>
                  SERVICES
                  <ChevronDownIcon
                    className='-mr-1 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Menu.Button>
              )}
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 z-10 w-56 origin-top-right rounded-sm bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          onChangeServiceQuery(undefined)
                          onSetSelectedService('')
                        }}
                        className={twMerge(
                          active && 'bg-greige text-gray-900',
                          'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                        )}
                      >
                        {t('featuredProject.filterAll')}
                      </button>
                    )}
                  </Menu.Item>
                  {services?.data.map((service) => {
                    return (
                      <Menu.Item key={service.id}>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              onChangeServiceQuery(service.id)
                              onSetSelectedService(service.attributes.title)
                            }}
                            className={twMerge(
                              active && 'bg-greige text-gray-900',
                              'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                            )}
                          >
                            {service.attributes.title}
                          </button>
                        )}
                      </Menu.Item>
                    )
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 ml-2 lg:ml-0'>
          <div className='w-full flex items-center'>
            <div className='flex flex-row gap-1'>
              <input
                type='checkbox'
                className='accent-charcoal-1000 cursor-pointer m1-2'
                checked={hasVideo === 'true'}
                onChange={(event) =>
                  onChangeHasVideoQuery(event.target.checked)
                }
              />
              <h6 className='font-thin uppercase'>Video</h6>
            </div>
          </div>
          <div className='w-full flex items-center'>
            <div className='flex items-center gap-1'>
              <input
                type='checkbox'
                className='accent-charcoal-1000 cursor-pointer m1-2'
                checked={isAwardWinning === 'true'}
                onChange={(event) =>
                  onChangeIsAwardWinning(event.target.checked)
                }
              />
              <h6 className='font-thin uppercase whitespace-nowrap'>
                Award-Winning
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*  mobile */}
      <div className='block lg:hidden'>
        <Disclosure>
          {({ open }) => (
            <div className='pt-20 pb-10'>
              <div className='flex flex-row justify-between'>
                <div>
                  <h4>{t('header.projects')}</h4>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <Disclosure.Button>
                    {open ? (
                      <MinusIcon width='16' height='16' />
                    ) : (
                      <PlusIcon width='16' height='16' />
                    )}
                  </Disclosure.Button>
                  <h5>{hasFilter ? 'FILTERED' : 'FILTER'}</h5>
                </div>
              </div>
              <div>
                <Disclosure.Panel>
                  <div className='lg:flex lg:justify-between lg:items-center pb-10'>
                    <div className='flex flex-col lg:flex-row lg:gap-6'>
                      <Menu
                        as='div'
                        className='relative inline-block text-left'
                      >
                        <div className='pb-2'>
                          {selectedIndustry ? (
                            <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm px-3 py-2 font-light bg-charcoal-1000 text-2xs uppercase text-lfaWhite'>
                              {selectedIndustry}
                              <ChevronDownIcon
                                className='-mr-1 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </Menu.Button>
                          ) : (
                            <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm bg-transparent px-3 py-2 font-light hover:bg-greige text-2xs '>
                              INDUSTRIES
                              <ChevronDownIcon
                                className='-mr-1 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </Menu.Button>
                          )}
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='z-10 ml-1 w-[98%] origin-top-right rounded-sm bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
                            <div className='py-0'>
                              {industries?.data.map((industry) => {
                                return (
                                  <Menu.Item key={industry.id}>
                                    {({ active }) => (
                                      <button
                                        onClick={() => {
                                          onChangeIndustryQuery(industry.id)
                                          onSetSelectedIndustry(
                                            industry.attributes.name,
                                          )
                                        }}
                                        className={twMerge(
                                          active && 'bg-greige text-gray-900',
                                          'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                                        )}
                                      >
                                        {industry.attributes.name}
                                      </button>
                                    )}
                                  </Menu.Item>
                                )
                              })}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Menu
                        as='div'
                        className='relative inline-block text-left'
                      >
                        <div className='pb-2'>
                          {selectedService ? (
                            <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm px-3 py-2 font-light bg-charcoal-1000 text-2xs uppercase text-lfaWhite'>
                              {selectedService}
                              <ChevronDownIcon
                                className='-mr-1 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </Menu.Button>
                          ) : (
                            <Menu.Button className='inline-flex w-full justify-between lg:justify-center lg:items-center gap-x-1.5 rounded-sm bg-transparent px-3 py-2 font-light hover:bg-greige text-2xs'>
                              SERVICES
                              <ChevronDownIcon
                                className='-mr-1 h-5 w-5 text-gray-400'
                                aria-hidden='true'
                              />
                            </Menu.Button>
                          )}
                        </div>

                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='z-10 w-[98%] origin-top-right rounded-sm bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
                            <div className='py-1'>
                              {services?.data.map((service) => {
                                return (
                                  <Menu.Item key={service.id}>
                                    {({ active }) => (
                                      <button
                                        onClick={() => {
                                          onChangeServiceQuery(service.id)
                                          onSetSelectedService(
                                            service.attributes.title,
                                          )
                                        }}
                                        className={twMerge(
                                          active && 'bg-greige text-gray-900',
                                          'text-left block px-4 py-2 neue-wide uppercase text-gray-50 w-full font-thin',
                                        )}
                                      >
                                        {service.attributes.title}
                                      </button>
                                    )}
                                  </Menu.Item>
                                )
                              })}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-6 lg:ml-0'>
                      <div className='w-full flex items-center'>
                        <div className='flex flex-row gap-1'>
                          <input
                            type='checkbox'
                            className='accent-charcoal-1000 cursor-pointer m1-2'
                            onChange={(event) =>
                              onChangeHasVideoQuery(event.target.checked)
                            }
                          />
                          <h6 className='font-thin uppercase'>Video</h6>
                        </div>
                      </div>
                      <div className='w-full flex items-center'>
                        <div className='flex items-center gap-1'>
                          <input
                            type='checkbox'
                            className='accent-charcoal-1000 cursor-pointer m1-2'
                            onChange={(event) =>
                              onChangeIsAwardWinning(event.target.checked)
                            }
                          />
                          <h6 className='font-thin uppercase whitespace-nowrap'>
                            Award-Winning
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </div>
          )}
        </Disclosure>
      </div>
    </>
  )
}
