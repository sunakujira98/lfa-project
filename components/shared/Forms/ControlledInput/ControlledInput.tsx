'use client'

import { ComponentPropsWithoutRef } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'

import { getFormErrorMessage } from '@/utils/Forms/Forms.utils'

type ControlledInputProps<T extends FieldValues> = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size'
> & {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}

export function ControlledInput<T extends FieldValues>({
  control,
  errors,
  name,
  ...inputProps
}: ControlledInputProps<T>) {
  const error = getFormErrorMessage(errors, name)

  return (
    <div className='w-full'>
      <Controller
        render={({ field }) => (
          <input
            className='w-full font-thin rounded-lg max-md:placeholder:text-xs lg:placeholder:text-md lg:placeholder:font-thin lg:placeholder:text-charcoal-100 bg-transparent lg:placeholder:tracking-[0.24px] outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-transparent lg:text-md'
            {...field}
            {...inputProps}
          />
        )}
        name={name}
        control={control}
      />
      <div className='w-full'>
        {error && <span className='text-error text-3xs'>{error}</span>}
      </div>
    </div>
  )
}
