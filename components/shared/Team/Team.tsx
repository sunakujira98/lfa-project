/* eslint-disable @next/next/no-img-element */

import { TTeam } from '@/domain/types/team.types'

import { LinkedinIcon } from '../svg/icons'

type TeamProps = {
  data: TTeam
}
export function Team({ data }: TeamProps) {
  return (
    <div className='flex flex-col pb-6'>
      <div className='relative md:h-80 h-64'>
        <img
          src='/images/background-figure.png'
          className='absolute inset-0 w-full h-full object-cover'
          alt='background'
        />

        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image?.data?.attributes.url}`}
          className='absolute inset-0 w-full h-full object-center'
          alt={data.attributes.name}
        />
      </div>
      <div className='pt-6'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h5>{data.attributes.name}</h5>
            {data.attributes.linkedin && (
              <a href={data.attributes.linkedin}>
                <LinkedinIcon />
              </a>
            )}
          </div>
          <h6 className='w-36'>{data.attributes.position}</h6>
        </div>
      </div>
    </div>
  )
}
