/* eslint-disable @typescript-eslint/no-explicit-any */

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

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  ComponentPropsWithoutRef<'input'>,
  'size'
> & {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
  text: any
}

export function ControlledCheckbox<T extends FieldValues>({
  control,
  errors,
  name,
  text,
  ...inputProps
}: ControlledCheckboxProps<T>) {
  const error = getFormErrorMessage(errors, name)
  return (
    <div className='w-full'>
      <div className='flex flex-row gap-2'>
        <Controller
          render={({ field }) => <input {...field} {...inputProps} />}
          name={name}
          control={control}
        />
        <span className='text-3xs md:text-xs'>{text}</span>
      </div>
      <div className='w-full'>
        {error && <span className='text-error text-3xs'>{error}</span>}
      </div>
    </div>
  )
}
