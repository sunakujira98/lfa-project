/* eslint-disable @next/next/no-img-element */

'use client'

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
          <div
            className='block h-screen mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
            style={{ backgroundImage: "url('/images/bg-hero.png')" }}
          >
            <div className='max-w-screen-xl'>
              <div className='container mx-auto'>
                <div className='flex flex-row px-20'>
                  <div className='h-1/2'></div>
                  <div className='h-1/2 text-lfaWhite'>
                    <h1 className='text-6xl max-w-14'>
                      {data?.data.attributes.title}
                    </h1>
                    <span className='text-3xs uppercase'>
                      {data?.data.attributes.location}
                    </span>
                    <div className='flex flex-row gap-20 pt-10'>
                      <div className='flex flex-col gap-2'>
                        <span className='text-2xs'>INDUSTRY</span>
                        <a href='#'>
                          <span className='text-2xs underline'>
                            {
                              data.data.attributes.industry?.data?.attributes
                                .name
                            }
                          </span>
                        </a>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='text-2xs'>SERVICE</span>
                        <a href='#'>
                          <span className='text-2xs underline'>
                            {
                              data.data.attributes.service?.data?.attributes
                                .title
                            }
                          </span>
                        </a>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='text-2xs'>COMPLETION YEAR</span>
                        <span className='text-2xs underline'>
                          {data.data.attributes.completionDate}
                        </span>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='text-2xs'>INDUSTRY</span>
                        <a href='#'>
                          <span className='text-2xs underline'>
                            {
                              data.data.attributes.industry?.data?.attributes
                                .name
                            }
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-charcoal-1000 mb-5'>
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
        {/* <div className='max-w-screen-xl mx-auto py-10'>
          <div className='container flex justify-center'>
          </div>
        </div> */}
      </>
    )
  )
}
