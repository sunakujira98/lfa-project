'use client'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

import { useGetAllIndustryQuery } from '@/hooks/query/useIndustryQuery'
import { useGetAllRegionsQuery } from '@/hooks/query/useRegionQuery'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'

export function ProjectFilter() {
  const { data: industries } = useGetAllIndustryQuery()
  const { data: services } = useGetAllServiceQuery()
  const { data: regions } = useGetAllRegionsQuery()

  return (
    <div className='hidden md:flex justify-between'>
      <div className='flex flex-row gap-6'>
        <Menu as='div' className='relative inline-block text-left'>
          <div className='py-4'>
            <Menu.Button className='inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 font-light hover:bg-charcoal-100 text-2xs'>
              INDUSTRIES
              <ChevronDownIcon
                className='-mr-1 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Menu.Button>
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
            <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
              <div className='py-1'>
                {industries?.data.map((industry) => {
                  return (
                    <Menu.Item key={industry.id}>
                      {({ active }) => (
                        <a
                          href='#'
                          className={twMerge(
                            active
                              ? 'bg-greige text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-3xs uppercase',
                          )}
                        >
                          {industry.attributes.name}
                        </a>
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
            <Menu.Button className='inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 font-light hover:bg-charcoal-100 text-2xs'>
              SERVICES
              <ChevronDownIcon
                className='-mr-1 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Menu.Button>
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
            <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
              <div className='py-1'>
                {services?.data.map((service) => {
                  return (
                    <Menu.Item key={service.id}>
                      {({ active }) => (
                        <a
                          href='#'
                          className={twMerge(
                            active
                              ? 'bg-greige text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-3xs uppercase',
                          )}
                        >
                          {service.attributes.title}
                        </a>
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
            <Menu.Button className='inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 font-light hover:bg-charcoal-100 text-2xs'>
              REGIONS
              <ChevronDownIcon
                className='-mr-1 h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Menu.Button>
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
            <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-beige shadow-lg ring-2 ring-white ring-opacity-100 focus:outline-none'>
              <div className='py-1'>
                {regions?.data.map((region) => {
                  return (
                    <Menu.Item key={region.id}>
                      {({ active }) => (
                        <a
                          href='#'
                          className={twMerge(
                            active
                              ? 'bg-greige text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-3xs uppercase',
                          )}
                        >
                          {region.attributes.name}
                        </a>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='flex flex-row gap-6'>
        <div>Video</div>
        <div>Award Winning</div>
      </div>
    </div>
  )
}
