/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

import { TTeam } from '@/domain/types/team.types'

import { LinkedinIcon } from '../svg/icons'

type TeamProps = {
  data: TTeam
  isActive: boolean
  onClick: () => void
}
export function Team({ data, isActive, onClick }: TeamProps) {
  const TeamSingle = () => {
    return (
      <div
        className='flex flex-col pb-6 cursor-pointer'
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        <div className='relative h-[200px] lg:h-80 '>
          <img
            src='/images/background-figure.png'
            className='absolute inset-0 w-44 h-[200px] lg:w-full lg:h-full object-cover'
            alt='background'
          />

          <img
            src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image?.data?.attributes.url}`}
            className='absolute inset-0 w-44 h-[200px] lg:w-full lg:h-full object-cover'
            alt={data.attributes.name}
          />
        </div>
        <div className='pt-2 px-2 lg:pt-6 lg:px-0'>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <h6 className='neue-normal lg:!font-normal'>
                {data.attributes.name}
              </h6>
              <div className='hidden lg:block'>
                {hover && data.attributes.linkedin && (
                  <a href={data.attributes.linkedin} target='_blank'>
                    <LinkedinIcon />
                  </a>
                )}
              </div>
            </div>
            <h6 className='w-full lg:w-36 neue-3xs-normal !no-underline h-7'>
              {data.attributes.position}
            </h6>
            <div className='hidden lg:block'>
              <div className={!hover ? 'pt-[17px]' : 'pt-4'}></div>
            </div>
            {hover && <div className='border-b-[1px] hidden lg:block'></div>}
          </div>
        </div>
      </div>
    )
  }
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  return isActive ? (
    <>
      <div
        className='flex flex-col pb-6 cursor-pointer lg:hidden'
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        <div className='relative h-72 lg:h-80'>
          <div className='absolute inset-0 w-44 h-72 object-cover bg-greige flex flex-col'>
            <div className='flex flex-col justify-between h-full px-2 py-2'>
              <a href={data.attributes.linkedin} target='_blank'>
                <div className='p-[5px] border-[1px] border-gray-50 w-fit rounded-md'>
                  <LinkedinIcon width='16' height='16' />
                </div>
              </a>
              <div className='flex flex-col gap-2'>
                <h6 className='neue-normal !no-underline'>
                  {data.attributes.name}
                </h6>
                <h6 className='w-36 neue-3xs-normal !no-underline'>
                  {data.attributes.position}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <TeamSingle />
      </div>
    </>
  ) : (
    <TeamSingle />
  )
}
