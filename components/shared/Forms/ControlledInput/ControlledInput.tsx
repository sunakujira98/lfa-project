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
            className='w-full bg-transparent p-2 font-thin border-primary-600 border-[1px] rounded-lg'
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
