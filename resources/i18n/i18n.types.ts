/* eslint-disable @typescript-eslint/no-explicit-any */
import { S, Object as TSObject } from 'ts-toolbelt'

import { resources } from './i18n.resources'

export type Resources = (typeof resources)['en-US']
export type PrependDot<T extends string> = [T] extends [never] ? '' : `.${T}`

export type TranslationPath<
  T extends object,
  P = undefined,
> = keyof T extends infer K
  ? K extends string & keyof T
    ? T[K] extends object
      ? T[K] extends Array<any>
        ? K
        : `${K}${PrependDot<TranslationPath<T[K], P>>}`
      : K
    : never
  : never

export type TranslationKeys = TranslationPath<Resources>
export type TranslationKeysArray<Key extends TranslationKeys> = S.Split<
  Key,
  '.'
>
export type TranslationValue<Key extends TranslationKeys> = TSObject.Path<
  Resources,
  TranslationKeysArray<Key>
>

export type TranslateConfig = {
  defaultValue?: string
  [key: string]: string | number | undefined
}

export type TranslationFunction = (
  path: TranslationKeys,
  config?: TranslateConfig,
) => any
