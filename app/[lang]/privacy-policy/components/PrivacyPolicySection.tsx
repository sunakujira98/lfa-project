'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { OtherQueries } from '@/components/shared/OtherQueries'
import { TContent } from '@/domain/types/article.types'
import { StrapiResponse } from '@/domain/types/common.types'
import { TPrivacyPolicy } from '@/domain/types/privacyPolicy.types'
import { useGetAllPrivacyPolicyQuery } from '@/hooks/query/usePrivacyPolicyQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function PrivacyPolicySection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [description, setActiveDescription] = useState<TContent[] | undefined>(
    undefined,
  )
  const [title, setTitle] = useState<string>('')

  const { data, isSuccess } = useGetAllPrivacyPolicyQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TPrivacyPolicy>

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const privacyPolicies = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  const firstTitleToShow = privacyPolicies[0]?.attributes?.title
  const firstDescriptionToShow = privacyPolicies[0]?.attributes?.description

  useEffect(() => {
    if (isSuccess) {
      setActiveIndex(privacyPolicies[0]?.id)
    }
  }, [isSuccess, privacyPolicies])

  const onClickActive = (
    index: number,
    content: TContent[],
    titleText: string,
  ) => {
    setActiveIndex(index)
    setActiveDescription(content)
    setTitle(titleText)
  }

  return (
    <div className='pt-28 pb-10 lg:pb-0 lg:pt-28 px-4 lg:px-0'>
      <div className='pb-20'>
        <h3>{t('privacyPolicy.title')}</h3>
      </div>
      {isSuccess && (
        <div className='flex flex-col px-4 lg:px-0'>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-14 lg:px-0'>
            <div className='w-full lg:w-1/3'>
              {privacyPolicies.map((privacyPolicy, index) => {
                const isLastIndex = index === data?.data.length - 1

                return (
                  <div
                    className={twMerge(
                      isLastIndex
                        ? 'border-b-[1px] lg:border-none'
                        : 'border-b-[1px]',
                      'py-[13px] lg:py-4',
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
                          privacyPolicy.attributes.title,
                        )
                      }
                    />
                  </div>
                )
              })}
            </div>
            <div className='py-4 w-full lg:w-2/3'>
              {description ? (
                <>
                  <div className='border-b-[1px] border-charcoal-100 pb-4 lg:hidden'>
                    <h4 className='text-md font-thin'>{title}</h4>
                  </div>
                  <div className='pt-4 lg:pt-0'>
                    <ContentRenderer data={description} />
                  </div>
                </>
              ) : (
                <>
                  <div className='border-b-[1px] border-charcoal-100 pb-4 lg:hidden'>
                    <h4 className='text-md font-thin'>{firstTitleToShow}</h4>
                  </div>
                  <div className='pt-4 lg:pt-0'>
                    <ContentRenderer data={firstDescriptionToShow} />
                  </div>
                </>
              )}
            </div>
          </div>
          <OtherQueries subtitle={t('queries.privacyPolicySubtitle')} />
        </div>
      )}
    </div>
  )
}
