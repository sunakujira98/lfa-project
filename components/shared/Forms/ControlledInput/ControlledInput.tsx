'use client'

import { ComponentPropsWithoutRef } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'

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
  return (
    <Controller
      render={({ field }) => (
        <input
          className='w-full bg-transparent p-2 font-thin border-primary-600 border-[1px] rounded-lg'
          {...field}
          {...inputProps}
          // error={getFormErrorMessage(errors, name)}
        />
      )}
      name={name}
      control={control}
    />
  )
}
