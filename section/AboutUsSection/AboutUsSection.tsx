'use client'

import { useMemo, useState } from 'react'

import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { Team } from '@/components/shared/Team'
import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'
import { useGetAllTeamQuery } from '@/hooks/query/useTeamQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function AboutUsSection() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const { t } = useTranslation()
  const { isSuccess: isSuccessTeams, data: teams } = useGetAllTeamQuery()
  const { data: awards } = useGetAllAwardQuery()

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index)
  }

  const sortedTeams = useMemo(() => {
    return teams?.data.sort((a, b) => {
      const aOrder = a.attributes.order ?? 0
      const bOrder = b.attributes.order ?? 0
      return bOrder - aOrder
    })
  }, [teams])

  return (
    isSuccessTeams && (
      <>
        <div className='h-[95vh] lg:h-screen hidden pt-6 lg:pt-0 lg:items-center absolute inset-0 md:flex'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute inset-0 w-full h-full object-cover'
          >
            <source src='/videos/bg-hero.mp4' type='video/mp4' />
          </video>
        </div>

        <div className='h-[95vh] lg:h-screen flex pt-6 lg:pt-0 lg:items-center absolute inset-0 md:hidden'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute inset-0 w-full h-full object-cover'
          >
            <source src='/videos/about-us-hero-mobile.mp4' type='video/mp4' />
          </video>
        </div>

        <div className='flex flex-col h-[95vh] lg:h-screen max-w-screen-xl mx-auto relative z-2 px-4 lg:px-0'>
          <div className='flex-1'></div>
          <div className='self-start px-2 py-10 text-lfaWhite flex flex-col w-full'>
            <h1 className='content-title'>{t('aboutUs.title')}</h1>
          </div>
        </div>

        <div className='max-w-screen-xl h-screen mx-auto flex justify-center items-center py-10 px-4 lg:px-0'>
          <div className='container'>
            <div className='flex flex-col items-center'>
              <h1 className='content-title lg:mb-[-25px]'>
                {t('aboutUs.cultivating')}
              </h1>
              <h1 className='font-keppler text-[40px] lg:text-6xl lg:mb-[-40px]'>
                {t('aboutUs.growth')}
              </h1>
              <h1 className='content-title'>{t('aboutUs.together')}</h1>
              <p className='text-center  lg:w-[65%] neue-normal pt-6'>
                {t('aboutUs.paragraph.description')}
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto pt-10 lg:py-10 border-t-[1px] px-4 lg:px-0'>
          <div className='container flex flex-col'>
            <h6 className='uppercase'>{t('aboutUs.theLfaTeam')}</h6>
            <div className='py-10'>
              <img
                src='/images/lfa-interior-commercial-team-and-professionals.png'
                className='h-full w-full aspect-auto object-contain'
                alt='Diverse team of professionals from Lemonfridge Associates (LFA), dressed in corporate attire, posing for a company group photo.'
              />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-y-10 gap-x-4 lg:gap-4'>
              {sortedTeams?.map((team, index) => {
                return (
                  <Team
                    key={`team-${index}`}
                    data={team}
                    isActive={index === activeIndex}
                    onClick={() => handleItemClick(index)}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 lg:border-t-[1px] border-gray-50 lg:px-0 px-4'>
          <div className='container flex flex-col'>
            <h6 className='neue-wide pb-6 border-b-[1px] lg:border-none'>
              {t('awards.title')}
            </h6>
            {awards?.data.map((award) => {
              return (
                <div
                  className='flex justify-between border-b-[1px] py-2 neue-3xs-normal !no-underline lg:neue-normal !font-normal items-center border-charcoal-100 uppercase'
                  key={award.id}
                >
                  {award.attributes.awardName}
                  <ArrowRightUpIcon />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  )
}
