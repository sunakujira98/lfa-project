import { twMerge } from 'tailwind-merge'

import {
  ClassValue,
  Config,
  ConfigSchema,
  Props,
} from './tailwind-variant.types'

export const tv =
  <T extends ConfigSchema>(baseClass: ClassValue, config?: Config<T>) =>
  ({ className, ...props }: Props<T>) => {
    if (!config || !config.variants) {
      return twMerge(baseClass, className)
    }

    const { variants, defaultVariants, compoundVariants, variantsFunction } =
      config

    const variantClassNames = Object.keys(variants).map((variantKey) => {
      const variantPropsValue = props[
        variantKey as keyof typeof props
      ] as string
      const defaultVariantPropsValue = defaultVariants?.[variantKey] as string
      const variantType = variantPropsValue || defaultVariantPropsValue

      if (variantPropsValue === null || !variantType) {
        return ''
      }

      return variants?.[variantKey][variantType] || ''
    })

    const propsWithoutUndefined =
      props &&
      Object.entries(props).reduce((accum, [key, value]) => {
        if (value === undefined) {
          return accum
        }

        const keyValue = key as keyof typeof accum
        accum[keyValue] = value

        return accum
      }, {} as Omit<Props<T>, 'className'>)

    const compoundVariantClassNames = compoundVariants
      ? compoundVariants.map(
          ({ className: compoundClassName, ...variantType }) => {
            const compoundVariantMatch = Object.entries(variantType).every(
              ([variantTypeKey, variantTypeValue]) => {
                const passedVariants = {
                  ...defaultVariants,
                  ...propsWithoutUndefined,
                }

                return passedVariants[variantTypeKey] === variantTypeValue
              },
            )

            return compoundVariantMatch ? compoundClassName : ''
          },
        )
      : []

    const functionClassNames = variantsFunction
      ? Object.values(variantsFunction).map((variantFn) => {
          const variantArgs = {
            ...defaultVariants,
            ...propsWithoutUndefined,
          } as Omit<Props<T>, 'className'>

          return variantFn(variantArgs)
        })
      : []

    return twMerge(
      baseClass,
      ...variantClassNames,
      ...functionClassNames,
      ...compoundVariantClassNames,
      className,
    )
  }
