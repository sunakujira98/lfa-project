'use client'

import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'

import { getFormErrorMessage } from '@/utils/Forms/Forms.utils'

type ControlledTextareaProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
  placeholder?: string
}

export function ControlledTextarea<T extends FieldValues>({
  control,
  errors,
  name,
  placeholder,
  ...inputProps
}: ControlledTextareaProps<T>) {
  const error = getFormErrorMessage(errors, name)

  return (
    <div className='w-full'>
      <Controller
        render={({ field }) => (
          <textarea
            placeholder={placeholder}
            className='w-full p-2 font-thin rounded-lg max-md:placeholder:text-3xs lg:placeholder:text-md lg:placeholder:font-thin lg:placeholder:text-charcoal-100 bg-transparent'
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
