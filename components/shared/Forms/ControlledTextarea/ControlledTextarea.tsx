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
            className='w-full font-thin rounded-lg max-md:placeholder:text-xs lg:placeholder:text-md lg:placeholder:font-thin lg:placeholder:text-charcoal-100 bg-transparent lg:placeholder:tracking-[0.24px] lg:placeholder:leading-8 outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-transparent lg:text-md'
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
