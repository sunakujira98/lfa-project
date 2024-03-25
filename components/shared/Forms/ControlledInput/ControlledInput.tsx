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
            className='w-full p-2 font-thin rounded-lg max-md:placeholder:text-3xs lg:placeholder:text-md lg:placeholder:font-thin lg:placeholder:text-charcoal-100 bg-transparent lg:placeholder:tracking-[0.24px] outline-none'
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
