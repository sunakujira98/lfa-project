'use client'

import { Disclosure } from '@headlessui/react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { OtherQueries } from '@/components/shared/OtherQueries'
import { StrapiSingleComponentResolver } from '@/components/shared/StrapiComponentResolver/StrapiSingleComponentResolver'
import MinusIcon from '@/components/shared/svg/icons/MinusIcon'
import PlusIcon from '@/components/shared/svg/icons/PlusIcon'
import { StrapiResponse, TCommonAnswers } from '@/domain/types/common.types'
import { TFAQ } from '@/domain/types/faq.types'
import { useGetAllFaqQuery } from '@/hooks/query/useFaqQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function FaqSection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [activeAnswer, setActiveAnswer] = useState<
    TCommonAnswers[] | undefined
  >(undefined)

  const { data, isSuccess } = useGetAllFaqQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TFAQ>

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const faqs = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  const firstAnswersToShow = faqs[0]?.attributes?.answers

  useEffect(() => {
    if (isSuccess) {
      setActiveIndex(faqs[0]?.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  const onClickActive = (index: number, answers: TCommonAnswers[]) => {
    setActiveIndex(index)
    setActiveAnswer(answers)
  }

  return (
    isSuccess && (
      <div className='pt-28 pb-10 lg:pb-0 lg:pt-28 px-4 lg:px-0'>
        <div className='pb-20'>
          <h3>{t('faq.title')}</h3>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col lg:flex-row gap-20 lg:gap-14 lg:px-0'>
            <div className='w-full lg:w-1/3'>
              {faqs.map((faq, index) => {
                const isLastIndex = index === data?.data.length - 1

                return (
                  <div
                    className={twMerge(
                      isLastIndex
                        ? 'border-b-[1px] lg:border-none'
                        : 'border-b-[1px]',
                      'py-[13px] lg:py-4',
                    )}
                    key={faq.id}
                  >
                    <BigButton
                      active={activeIndex === faq.id}
                      title={faq.attributes.title}
                      onClick={() =>
                        onClickActive(faq.id, faq.attributes.answers)
                      }
                    />
                  </div>
                )
              })}
            </div>
            <div className='w-full lg:w-2/3'>
              {activeAnswer ? (
                activeAnswer.map((answer, index) => {
                  return (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <div className='py-7 border-b-[1px]'>
                          <div className='flex flex-row justify-between'>
                            <h5 className='neue-normal'>{answer.title}</h5>
                            <Disclosure.Button>
                              {open ? <MinusIcon /> : <PlusIcon />}
                            </Disclosure.Button>
                          </div>
                          <div className={twMerge(open ? 'py-4' : 'py-0')}>
                            <Disclosure.Panel>
                              <StrapiSingleComponentResolver
                                componentDetail={answer.__component}
                                data={answer.content}
                              />
                            </Disclosure.Panel>
                          </div>
                        </div>
                      )}
                    </Disclosure>
                  )
                })
              ) : (
                <>
                  {firstAnswersToShow.map((answer, index) => {
                    return (
                      <Disclosure key={index}>
                        {({ open }) => (
                          <div className='py-7 border-b-[1px]'>
                            <div className='flex flex-row justify-between'>
                              <h5 className='neue-normal'>{answer.title}</h5>
                              <Disclosure.Button>
                                {open ? <MinusIcon /> : <PlusIcon />}
                              </Disclosure.Button>
                            </div>
                            <div className={twMerge(open ? 'py-4' : 'py-0')}>
                              <Disclosure.Panel>
                                <StrapiSingleComponentResolver
                                  componentDetail={answer.__component}
                                  data={answer.content}
                                />
                              </Disclosure.Panel>
                            </div>
                          </div>
                        )}
                      </Disclosure>
                    )
                  })}
                </>
              )}
            </div>
          </div>
          <div className='px-4 lg:px-0'>
            <OtherQueries subtitle={t('queries.subtitle')} />
          </div>
        </div>
      </div>
    )
  )
}
