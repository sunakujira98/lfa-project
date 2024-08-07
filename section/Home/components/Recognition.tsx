/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useLanguage } from '@/components/Provider'
import { CustomDot } from '@/components/shared/CustomDot'
import ArrowLeftIcon from '@/components/shared/svg/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/components/shared/svg/icons/ArrowRightIcon'
import { StrapiResponse } from '@/domain/types/common.types'
import { TRecognition } from '@/domain/types/recognition.types'
import { useGetAllRecognitionQuery } from '@/hooks/query/useGetAllRecognitionQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function Recognition() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { t } = useTranslation()
  const { lang } = useLanguage()

  const { data, isSuccess } = useGetAllRecognitionQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TRecognition>

  const recognitions = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 && data?.data ? data?.data?.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      data?.data && prevIndex === data?.data?.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10 px-4 lg:px-0'>
        <div className='container pb-10'>
          <h6 className='text-gray-50 neue-wide'>{t('recognitions.title')}</h6>
        </div>
        <div className='hidden lg:block'>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            customDot={<CustomDot />}
            customLeftArrow={
              <ArrowLeftIcon className='absolute top-1/3 left-0 cursor-pointer text-charcoal-600 hover:text-charcoal-1000' />
            }
            customRightArrow={
              <ArrowRightIcon className='absolute top-1/3 right-0 cursor-pointer text-charcoal-600 hover:text-charcoal-1000' />
            }
            className='w-full'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 768 },
                items: 4,
              },
              mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 1,
                slidesToSlide: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=''
            slidesToSlide={3}
            swipeable
          >
            {recognitions.map((recognition) => {
              return (
                <div className='w-full' key={recognition.id}>
                  <div
                    className='flex flex-col lg:items-center justify-center gap-6'
                    key={recognition.id}
                  >
                    <a
                      href={`${recognition.attributes.externalLink}`}
                      target='_blank'
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_CMS_HOST}${recognition.attributes.image.data.attributes.url}`}
                        className='w-full h-fit lg:w-[200px] lg:h-[120px] cursor-pointer'
                        alt={recognition.attributes.title}
                      />
                    </a>
                    <div className='flex flex-col gap-2'>
                      <a
                        href={`${recognition.attributes.externalLink}`}
                        target='_blank'
                      >
                        <div className='flex flex-row neue-wide'>
                          <h6>{recognition.attributes.title} &nbsp;</h6>
                          <h6>
                            {dayjs(recognition.attributes.createdAt).format(
                              'DD MMM YYYY',
                            )}
                          </h6>
                        </div>
                      </a>
                      <h6 className='text-xs font-light leading-6 tracking-[0.16px]'>
                        {recognition.attributes.description}
                      </h6>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className='relative lg:hidden'>
          <div className='overflow-hidden'>
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data?.data?.[currentIndex].attributes.image.data.attributes.url}`}
              alt={`Image ${currentIndex}`}
              className='w-full h-52 md:h-full object-center'
            />
            <div className='flex flex-col gap-2 pt-4'>
              <h6 className='uppercase'>
                {data?.data?.[currentIndex].attributes.title} &nbsp;
              </h6>

              <h6>
                {dayjs(data?.data?.[currentIndex].attributes.createdAt).format(
                  'DD MMM YYYY',
                )}
              </h6>
              <h6>{data?.data?.[currentIndex].attributes.description}</h6>
            </div>
          </div>
          <div className='flex justify-between items-center mt-10'>
            <div className='flex items-center'>
              {data?.data?.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? 'bg-charcoal-1000'
                      : 'border-[1px] border-charcoal-600'
                  }`}
                ></div>
              ))}
            </div>
            <div className='flex justify-between items-center mt-2 border-[1px] border-charcoal-600 rounded-full'>
              <button
                onClick={goToPrevious}
                className='text-white px-3 py-2 rounded-l-full'
              >
                <ArrowLeftIcon />
              </button>
              <div className='border-l border-charcoal-600 h-12'></div>
              <button
                onClick={goToNext}
                className='text-white px-3 py-2 rounded-r-full'
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
