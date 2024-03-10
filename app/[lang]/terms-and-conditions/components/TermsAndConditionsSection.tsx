'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { BigButton } from '@/components/shared/BigButton/BigButton'
import { ContentRenderer } from '@/components/shared/ContentRenderer/ContentRenderer'
import { TContent } from '@/domain/types/article.types'
import { useGetAllTncQuery } from '@/hooks/query/useTncQuery'

export function TermsAndConditionsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [description, setActiveDescription] = useState<TContent[] | undefined>(
    undefined,
  )

  const { data, isSuccess } = useGetAllTncQuery()

  const onClickActive = (index: number, content: TContent[]) => {
    setActiveIndex(index)
    setActiveDescription(content)
  }

  return (
    <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
      <div className='pb-20'>
        <h3>Terms And Conditions</h3>
      </div>
      {isSuccess && (
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-20 md:gap-14 px-4 md:px-0'>
            <div className='w-full md:w-1/3'>
              {data?.data?.map((privacyPolicy, index) => {
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
            <div className='w-full md:w-2/3'>
              {description ? (
                <ContentRenderer data={description} />
              ) : (
                <ContentRenderer
                  data={data?.data?.[0]?.attributes?.description}
                />
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
      )}
    </div>
  )
}
