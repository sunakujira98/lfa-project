'use client'

import { Listbox } from '@headlessui/react'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { CircleArrowDownIcon } from '../../svg/icons'

type Option = {
  label: string
  value: string
}

type SelectOptionProps = {
  placeholder: string
  name?: string
  options: {
    label: string
    value: string
  }[]
  value: string
  onChange: (value: string) => void
}

function normalizedOptions(options?: Option[]) {
  return options
    ? options?.reduce((accum, nextOption) => {
        accum[nextOption.value as string] = nextOption
        return accum
      }, {} as Record<string, Option>)
    : {}
}

export function SelectOption({
  name,
  placeholder,
  options,
  value,
  onChange,
}: SelectOptionProps) {
  const optionsMapRef = useRef(normalizedOptions(options))

  const displayValue = optionsMapRef.current[value]?.label || placeholder

  return (
    <Listbox name={name} value={value} onChange={onChange}>
      {({ open }) => (
        <div
          className={`relative flex flex-grow ${
            open ? 'flex-col-reverse' : 'flex-row justify-between'
          }`}
        >
          <div
            className={twMerge('neue-wider max-md:!text-sm', open && 'hidden')}
          >
            {displayValue}
          </div>
          <Listbox.Button className='absolute top-0 right-0'>
            <CircleArrowDownIcon className='w-10' />
          </Listbox.Button>
          <Listbox.Options
            className={`w-full cursor-pointer ${open ? 'mt-0' : ''}`}
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className='py-1 w-[80%] lg:w-[93%] ui-selected:bg-greige ui-active:bg-greige text-3xs lg:text-md font-thin'
              >
                {option.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  )
}
