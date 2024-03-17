/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { StrapiResponse } from '@/domain/types/common.types'
import { TRecognition } from '@/domain/types/recognition.types'
import { useGetAllRecognitionQuery } from '@/hooks/query/useGetAllRecognitionQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function Recognition() {
  const { t } = useTranslation()
  const { lang } = useParams()

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

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10 px-4 md:px-0'>
        <div className='container pb-10'>
          <h6 className='font-neue text-3xs text-gray-50 uppercase'>
            {t('recognitions.title')}
          </h6>
        </div>
        <div className='container'>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className='w-full'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=''
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
                    className='flex flex-col gap-6 items-center'
                    key={recognition.id}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${recognition.attributes.image.data.attributes.url}`}
                      className='w-full md:max-w-64'
                      alt={recognition.attributes.title}
                    />
                    <div className='flex flex-col gap-2'>
                      <h6 className='uppercase'>
                        {recognition.attributes.title} &nbsp;
                      </h6>

                      <h6>
                        {dayjs(recognition.attributes.createdAt).format(
                          'DD MMM YYYY',
                        )}
                      </h6>
                      <h6>{recognition.attributes.description}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    )
  )
}
