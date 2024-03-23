'use client'

import { ArrowRightUpIcon } from '@/components/shared/svg/icons'
import { Team } from '@/components/shared/Team'
import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'
import { useGetAllTeamQuery } from '@/hooks/query/useTeamQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

export function AboutUsSection() {
  const { t } = useTranslation()
  const { isSuccess: isSuccessTeams, data: teams } = useGetAllTeamQuery()
  const { data: awards } = useGetAllAwardQuery()

  return (
    isSuccessTeams && (
      <div>
        <div
          className='relative container mx-auto'
          style={{ maxWidth: '1680px' }}
        >
          <div className='relative overflow-hidden w-full'>
            <div
              className='h-[100vh] lg:h-screen mx-auto flex pt-6 lg:pt-0 lg:items-center bg-cover bg-right'
              style={{ backgroundImage: "url('/images/bg-hero.png')" }}
            >
              <div className='flex flex-col lg:h-screen'>
                <div className='flex-1'></div>
                <div className='self-start px-4 lg:px-20 py-10 ml-auto text-lfaWhite'>
                  <h1 className='text-2xl lg:text-6xl'>{t('aboutUs.title')}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl h-screen mx-auto flex justify-center items-center py-10 px-4 lg:px-0'>
          <div className='container'>
            <div className='flex flex-col items-center'>
              <h1 className='font-vinila text-2xl lg:text-6xl'>
                {t('aboutUs.cultivating')}
              </h1>
              <h1 className='font-keppler text-2xl lg:text-6xl'>
                {t('aboutUs.growth')}
              </h1>
              <h1 className='font-vinila text-2xl lg:text-6xl'>
                {t('aboutUs.together')}
              </h1>
              <p className='text-center'>
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

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
              {teams.data.map((team) => {
                return <Team data={team} />
              })}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 lg:border-t-[1px] lg:px-0 px-4'>
          <div className='container flex flex-col'>
            <h6 className='uppercase pb-6 border-b-[1px] lg:border-none'>
              {t('awards.title')}
            </h6>
            {awards?.data.map((award) => {
              return (
                <a href={award.attributes.externalLink}>
                  <div className='flex justify-between border-b-[1px] py-2 text-xs items-center'>
                    {award.attributes.awardName}
                    <ArrowRightUpIcon />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  )
}
