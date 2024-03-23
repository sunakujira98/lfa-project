/* eslint-disable @next/next/no-img-element */

'use client'

import { Link } from '@/components/shared/Link'
import { StrapiComponentResolver } from '@/components/shared/StrapiComponentResolver'
import { useGetProjectByIdQuery } from '@/hooks/query/useProjectQuery'

type ProjectDetailProps = {
  projectId: string
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { data, isSuccess } = useGetProjectByIdQuery(projectId)

  return (
    isSuccess && (
      <>
        <div
          className='relative container mx-auto'
          style={{ maxWidth: '1680px' }}
        >
          <div className='relative overflow-hidden w-full'>
            <div
              className='h-[70vh] lg:h-screen mx-auto flex pt-6 lg:pt-0 lg:items-center bg-cover bg-right'
              style={{ backgroundImage: "url('/images/bg-hero.png')" }}
            >
              <div className='flex flex-col lg:h-screen'>
                <div className='flex-1'></div>
                <div className='self-start px-4 lg:px-20 py-10 ml-auto text-lfaWhite'>
                  <h1 className='text-2xl lg:text-6xl'>
                    {data?.data.attributes.title}
                  </h1>
                  <h6 className='lg:text-2xs uppercase'>
                    {data?.data.attributes.location}
                  </h6>
                  <div className='flex flex-row gap-20 pt-10'>
                    <div className='flex flex-col gap-2'>
                      <h6 className='lg:text-2xs uppercase'>Industry</h6>
                      <Link
                        href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                      >
                        <h6 className='lg:text-2xs uppercase underline'>
                          {data.data.attributes.industry?.data?.attributes.name}
                        </h6>
                      </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h6 className='uppercase'>SERVICE</h6>
                      <Link
                        href={`/projects?service=${data.data.attributes.service?.data?.id}`}
                      >
                        <h6 className='lg:text-2xs underline'>
                          {data.data.attributes.service?.data?.attributes.title}
                        </h6>
                      </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h6 className='lg:text-2xs'>COMPLETION YEAR</h6>
                      <h6 className='lg:text-2xs underline'>
                        {data.data.attributes.completionDate}
                      </h6>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <h6 className='lg:text-2xs'>INDUSTRY</h6>
                      <Link
                        href={`/projects?industry=${data.data.attributes.industry?.data?.id}`}
                      >
                        <h6 className='lg:text-2xs underline'>
                          {data.data.attributes.industry?.data?.attributes.name}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-charcoal-1000 mb-5 px-4 lg:px-0'>
          <div className='max-w-screen-xl mx-auto py-10'>
            <span className='font-neue text-3xs text-lfaWhite'>AWARDS</span>
            <div className='flex justify-between whitespace-nowrap'>
              {data?.data.attributes.awards.data.map((award) => {
                return (
                  <div className='py-4' key={award.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_CMS_HOST}${award.attributes.image.data.attributes.url}`}
                      className='max-w-20'
                      alt={award.attributes.awardName}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <StrapiComponentResolver detail={data.data.attributes.detail} />
      </>
    )
  )
}
