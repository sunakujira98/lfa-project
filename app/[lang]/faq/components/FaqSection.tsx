'use client'

import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { StrapiSingleComponentResolver } from '@/components/shared/StrapiComponentResolver/StrapiSingleComponentResolver'
import { CircleArrowDownIcon } from '@/components/shared/svg/icons'
import { TFAQAnswers } from '@/domain/types/faq.types'
import { useGetAllFaqQuery } from '@/hooks/query/useFaqQuery'

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [activeAnswer, setActiveAnswer] = useState<TFAQAnswers[] | undefined>(
    undefined,
  )
  const [titleAbout, setTitleAbout] = useState<string>('')

  const { data } = useGetAllFaqQuery()

  const onClickActive = (
    index: number,
    answers: TFAQAnswers[],
    title: string,
  ) => {
    setActiveIndex(index)
    setActiveAnswer(answers)
    setTitleAbout(title)
  }

  return (
    <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
      <div className='pb-20'>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row gap-20 md:gap-14 px-4 md:px-0'>
          <div className='w-full md:w-1/3'>
            {data?.data?.map((faq, index) => {
              const isLastIndex = index === data?.data.length - 1

              return (
                <div
                  className={twMerge(
                    isLastIndex
                      ? 'border-b-[1px] md:border-none'
                      : 'border-b-[1px]',
                    'py-4',
                  )}
                  key={faq.id}
                >
                  <BigButton
                    active={activeIndex === faq.id}
                    title={faq.attributes.title}
                    onClick={() =>
                      onClickActive(
                        faq.id,
                        faq.attributes.answers,
                        faq.attributes.title,
                      )
                    }
                  />
                </div>
              )
            })}
          </div>
          <div className='w-full md:w-2/3'>
            {activeAnswer && (
              <div className='py-4 border-b-[1px]'>
                <h4>{titleAbout}</h4>
              </div>
            )}
            {activeAnswer ? (
              activeAnswer.map((answer, index) => {
                const isLastIndex =
                  index === activeAnswer.length - 1 && activeAnswer.length > 1

                return (
                  <Disclosure key={index}>
                    <div
                      className={twMerge(
                        isLastIndex ? 'border-none' : 'border-b-[1px]',
                        'py-7 flex flex-row justify-between',
                      )}
                    >
                      <h5>{answer.title}</h5>
                      <Disclosure.Button>
                        <CircleArrowDownIcon />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel>
                      <StrapiSingleComponentResolver
                        componentDetail={answer.__component}
                        data={answer.content}
                      />
                    </Disclosure.Panel>
                  </Disclosure>
                )
              })
            ) : (
              <>
                <div className='py-4 border-b-[1px]'>
                  <h4>{data?.data?.[0]?.attributes.title}</h4>
                </div>
                {data?.data?.[0]?.attributes?.answers?.map((answer, index) => {
                  const isLastIndex =
                    index === data?.data?.[0]?.attributes?.answers.length - 1 &&
                    data?.data?.[0]?.attributes?.answers.length > 1

                  return (
                    <Disclosure key={index}>
                      <div
                        className={twMerge(
                          isLastIndex ? 'border-none' : 'border-b-[1px]',
                          'py-7 flex flex-row justify-between',
                        )}
                      >
                        <h5>{answer.title}</h5>
                        <Disclosure.Button>
                          <CircleArrowDownIcon />
                        </Disclosure.Button>
                      </div>
                      <Disclosure.Panel>
                        <StrapiSingleComponentResolver
                          componentDetail={answer.__component}
                          data={answer.content}
                        />
                      </Disclosure.Panel>
                    </Disclosure>
                  )
                })}
              </>
            )}
          </div>
        </div>
        <div className='md:border-t-[1px] px-4 md:px-0'>
          <div className='flex flex-col md:flex-row py-20 md:py-10'>
            <div className='w-full md:w-1/3'></div>
            <div className='w-full md:w-2/3'>
              <div className='flex flex-col gap-6'>
                <h4>For any other queries, feel free to drop us a message</h4>
                <a className='outline-button w-fit' href='/contact'>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
