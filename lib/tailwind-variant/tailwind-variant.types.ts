/* eslint-disable @typescript-eslint/no-explicit-any */

export type ClassValue = string | null | undefined
export type ClassProps = { className?: ClassValue }

export type OmitUndefined<T> = T extends undefined ? never : T
export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  'class' | 'className'
>

export type ConfigSchema = Record<string, Record<string, ClassValue>>

export type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null
}

export type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
}

export type Props<T> = T extends ConfigSchema
  ? ConfigVariants<T> & ClassProps
  : ClassProps

export type Config<T extends ConfigSchema> = {
  variants?: T
  defaultVariants?: ConfigVariants<T>
  variantsFunction?: Record<
    string,
    (variants: Omit<Props<T>, 'className'>) => string
  >
  compoundVariants?: (T extends ConfigSchema
    ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProps
    : ClassProps)[]
}
