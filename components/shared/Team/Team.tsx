/* eslint-disable @next/next/no-img-element */

import { TTeam } from '@/domain/types/team.types'

import { LinkedinIcon } from '../svg/icons'

type TeamProps = {
  data: TTeam
}
export function Team({ data }: TeamProps) {
  return (
    <div className='flex flex-col pb-6'>
      <div className='relative md:h-80 bg-greige'>
        <img
          src={`${process.env.NEXT_PUBLIC_CMS_HOST}${data.attributes.image?.data?.attributes.url}`}
          className='w-40 md:max-h-80 md:max-w-60 md:aspect-auto left-0 bottom-0'
          alt={data.attributes.name}
        />
      </div>
      <div className='pt-6'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <span className='text-xs'>{data.attributes.name}</span>
            {data.attributes.linkedin && (
              <a href={data.attributes.linkedin}>
                <LinkedinIcon />
              </a>
            )}
          </div>
          <span className='text-3xs w-36'>{data.attributes.position}</span>
        </div>
      </div>
    </div>
  )
}
