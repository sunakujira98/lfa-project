'use client'

import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'

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
  return (
    <Controller
      render={({ field }) => (
        <textarea
          placeholder={placeholder}
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
