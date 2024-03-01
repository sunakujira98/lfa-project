'use client'

import { Team } from '@/components/shared/Team'
import { useGetAllAwardQuery } from '@/hooks/query/useAwardQuery'
import { useGetAllTeamQuery } from '@/hooks/query/useTeamQuery'

export function AboutUsSection() {
  const { isSuccess: isSuccessTeams, data: teams } = useGetAllTeamQuery()
  const { isSuccess: isSuccessAwards, data: awards } = useGetAllAwardQuery()

  return (
    isSuccessTeams && (
      <>
        <div
          className='relative container mx-auto'
          style={{ maxWidth: '1680px' }}
        >
          <div className='relative overflow-hidden w-full'>
            <div
              className='block h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
              style={{ backgroundImage: "url('/images/bg-hero.png')" }}
            >
              <div className='flex flex-col h-screen'>
                <div className='flex-1'></div>
                <div className='self-start px-20 py-10 ml-auto text-lfaWhite'>
                  <h1>About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl h-screen mx-auto py-10'>
          <div className='container flex justify-center'>
            <div className='flex items-center mx-auto max-w-[65%]'>
              <div className='flex flex-col items-center'>
                <h1 className='font-vinila text-6xl'>Cultivating</h1>
                <h1 className='font-keppler text-6xl'>Growth</h1>
                <h1 className='font-vinila text-6xl'>Together</h1>
                <p className='text-center'>
                  As an award-winning Design & Build Studio in Singapore, we
                  collaborate with local businesses to craft exceptional work
                  and commercial spaces. Our expertise lies in creating
                  commercial offices that not only stand out in design but also
                  inspire meaningful social interaction and foster strong
                  communal bonds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 border-t-[1px]'>
          <div className='container flex flex-col'>
            <h6 className='uppercase'>The Lfa Team</h6>
            <div className='py-10'>
              <img
                src='/images/teams.png'
                className='h-full w-full aspect-auto'
              />
            </div>

            <div className='grid grid-cols-5 xl:grid-cols-5 gap-4'>
              {teams.data.map((team) => {
                return <Team data={team} />
              })}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 border-t-[1px]'>
          <div className='container flex flex-col'>
            <h6 className='uppercase pb-6'>Awards</h6>
            {awards?.data.map((award) => {
              return (
                <div className='flex justify-between border-b-[1px] py-2 text-xs items-center'>
                  {award.attributes.awardName}
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                    >
                      <path
                        d='M12.667 7.3335H24.667V19.3335'
                        stroke='#333333'
                        stroke-width='0.666667'
                        stroke-linecap='square'
                      />
                      <path
                        d='M7.69629 24.3041L24.6668 7.3335'
                        stroke='#333333'
                        stroke-width='0.666667'
                        stroke-linecap='square'
                      />
                    </svg>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  )
}
