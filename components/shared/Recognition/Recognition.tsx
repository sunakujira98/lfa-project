/* eslint-disable @next/next/no-img-element */

'use client'

import dayjs from 'dayjs'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useGetAllRecognitionQuery } from '@/hooks/query/useGetAllRecognitionQuery'

export function Recognition() {
  const { data, isSuccess } = useGetAllRecognitionQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10 px-4 md:px-0'>
        <div className='container pb-8'>
          <span className='font-neue text-3xs text-gray-50'>RECOGNITIONS</span>
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
                breakpoint: { max: 3000, min: 0 },
                items: 4,
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
            {data?.data?.map((news) => {
              return (
                <div className='w-80' key={news.id}>
                  <div className='flex flex-col gap-6' key={news.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${news.attributes.image.data.attributes.url}`}
                      className='w-full md:max-w-64'
                      alt={news.attributes.title}
                    />
                    <div className='flex flex-col gap-2'>
                      <h6 className='uppercase'>
                        {news.attributes.title} &nbsp;
                      </h6>

                      <h6>
                        {dayjs(news.attributes.createdAt).format('DD MMM YYYY')}
                      </h6>
                      <h6>{news.attributes.description}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
            </div> */}
          </Carousel>
        </div>
      </div>
    )
  )
}
