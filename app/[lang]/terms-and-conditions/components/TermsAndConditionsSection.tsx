'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { OtherQueries } from '@/components/shared/OtherQueries'
import { TContent } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { TTnc } from '@/domain/types/tnc.types'
import { useGetAllTncQuery } from '@/hooks/query/useTncQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function TermsAndConditionsSection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [description, setActiveDescription] = useState<TContent[] | undefined>(
    undefined,
  )

  const { data, isSuccess } = useGetAllTncQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TTnc>

  const termsAndConditions = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  const firstDescriptionToShow = termsAndConditions[0]?.attributes?.description

  const onClickActive = (index: number, content: TContent[]) => {
    setActiveIndex(index)
    setActiveDescription(content)
  }

  return (
    <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
      <div className='pb-20'>
        <h3>{t('termsAndConditions.title')}</h3>
      </div>
      {isSuccess && (
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-20 md:gap-14 px-4 md:px-0'>
            <div className='w-full md:w-1/3'>
              {termsAndConditions.map((privacyPolicy, index) => {
                const isLastIndex = index === data?.data.length - 1

                return (
                  <div
                    className={twMerge(
                      isLastIndex
                        ? 'border-b-[1px] md:border-none'
                        : 'border-b-[1px]',
                      'py-4',
                    )}
                    key={privacyPolicy.id}
                  >
                    <BigButton
                      active={activeIndex === privacyPolicy.id}
                      title={privacyPolicy.attributes.title}
                      onClick={() =>
                        onClickActive(
                          privacyPolicy.id,
                          privacyPolicy.attributes.description,
                        )
                      }
                    />
                  </div>
                )
              })}
            </div>
            <div className='py-4 w-full md:w-2/3'>
              {description ? (
                <ContentRenderer data={description} />
              ) : (
                <ContentRenderer data={firstDescriptionToShow} />
              )}
            </div>
          </div>
          <OtherQueries />
        </div>
      )}
    </div>
  )
}
