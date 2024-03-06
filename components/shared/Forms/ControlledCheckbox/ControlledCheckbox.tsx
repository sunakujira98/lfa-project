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
}

export function ControlledCheckbox<T extends FieldValues>({
  control,
  errors,
  name,
  ...inputProps
}: ControlledCheckboxProps<T>) {
  const error = getFormErrorMessage(errors, name)
  console.log('error', error)
  return (
    <div className='w-full'>
      <div className='flex flex-row gap-2'>
        <Controller
          render={({ field }) => <input {...field} {...inputProps} />}
          name={name}
          control={control}
        />
        <span className='text-3xs md:text-xs'>
          I have read and accept the Privacy Policy and Terms & Conditions
        </span>
      </div>
      <div className='w-full'>
        {error && <span className='text-error'>{error}</span>}
      </div>
    </div>
  )
}
