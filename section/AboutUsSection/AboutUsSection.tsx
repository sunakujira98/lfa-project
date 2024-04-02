'use client'

import { useState } from 'react'

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

  return (
    isSuccessTeams && (
      <>
        <div
          className='h-[95vh] lg:h-screen flex pt-6 lg:pt-0 lg:items-center bg-cover bg-center absolute inset-0'
          style={{
            backgroundImage: "url('/images/bg-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='flex flex-col h-[95vh] lg:h-screen max-w-screen-xl mx-auto relative z-2'>
          <div className='flex-1'></div>
          <div className='self-start px-2 py-10 text-lfaWhite flex flex-col w-full'>
            <h1 className='text-2xl lg:text-6xl tracking-[-1.92px] leading-[96px]'>
              {t('aboutUs.title')}
            </h1>
          </div>
        </div>

        <div className='max-w-screen-xl h-screen mx-auto flex justify-center items-center py-10 px-4 lg:px-0'>
          <div className='container'>
            <div className='flex flex-col items-center'>
              <h1 className='font-vinila text-2xl lg:text-6xl lg:mb-[-30px]'>
                {t('aboutUs.cultivating')}
              </h1>
              <h1 className='font-keppler text-2xl lg:text-6xl lg:mb-[-40px]'>
                {t('aboutUs.growth')}
              </h1>
              <h1 className='font-vinila text-2xl lg:text-6xl'>
                {t('aboutUs.together')}
              </h1>
              <p className='text-center w-[65%] neue-normal pt-6'>
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
                src='/images/teams.png'
                className='h-full w-full aspect-auto'
              />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-y-10 gap-x-4 lg:gap-4'>
              {teams.data.map((team, index) => {
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
                <a href={award.attributes.externalLink}>
                  <div className='flex justify-between border-b-[1px] py-2 neue-normal !font-normal items-center border-charcoal-100 uppercase'>
                    {award.attributes.awardName}
                    <ArrowRightUpIcon />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </>
    )
  )
}
