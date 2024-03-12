'use client'

import { ArrowRightIcon } from '@/components/shared/svg/icons'
import { Team } from '@/components/shared/Team'
import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'
import { useGetAllTeamQuery } from '@/hooks/query/useTeamQuery'

export function AboutUsSection() {
  const { isSuccess: isSuccessTeams, data: teams } = useGetAllTeamQuery()
  const { isSuccess: isSuccessAwards, data: awards } = useGetAllAwardQuery()

  return (
    isSuccessTeams && (
      <div>
        <div
          className='relative container mx-auto'
          style={{ maxWidth: '1680px' }}
        >
          <div className='relative overflow-hidden w-full'>
            <div
              className='h-[70vh] md:h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
              style={{ backgroundImage: "url('/images/bg-hero.png')" }}
            >
              <div className='flex flex-col md:h-screen'>
                <div className='flex-1'></div>
                <div className='self-start px-4 md:px-20 py-10 ml-auto text-lfaWhite'>
                  <h1 className='text-2xl md:text-6xl'>About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl h-screen mx-auto flex justify-center items-center py-10 px-4 md:px-0'>
          <div className='container'>
            <div className='flex flex-col items-center'>
              <h1 className='font-vinila text-2xl md:text-6xl'>Cultivating</h1>
              <h1 className='font-keppler text-2xl md:text-6xl'>Growth</h1>
              <h1 className='font-vinila text-2xl md:text-6xl'>Together</h1>
              <p className='text-center'>
                As an award-winning Design & Build Studio in Singapore, we
                collaborate with local businesses to craft exceptional work and
                commercial spaces. Our expertise lies in creating commercial
                offices that not only stand out in design but also inspire
                meaningful social interaction and foster strong communal bonds.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto pt-10 md:py-10 border-t-[1px] px-4 md:px-0'>
          <div className='container flex flex-col'>
            <h6 className='uppercase'>The Lfa Team</h6>
            <div className='py-10'>
              <img
                src='/images/teams.png'
                className='h-full w-full aspect-auto'
              />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-4'>
              {teams.data.map((team) => {
                return <Team data={team} />
              })}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto pt-10 md:border-t-[1px] md:px-0 px-4'>
          <div className='container flex flex-col'>
            <h6 className='uppercase pb-6 border-b-[1px]'>Awards</h6>
            {awards?.data.map((award) => {
              return (
                <div className='flex justify-between border-b-[1px] py-2 text-xs items-center'>
                  {award.attributes.awardName}
                  <a href='#'>
                    <ArrowRightIcon />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  )
}
