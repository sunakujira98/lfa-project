/* eslint-disable @next/next/no-img-element */

'use client'
import { useGetAllProjectQuery } from '@/hooks/query/useProjectQuery'

export function FeaturedProduct() {
  const { data, isSuccess } = useGetAllProjectQuery()

  return (
    isSuccess && (
      <div className='max-w-screen-xl mx-auto py-10'>
        <div className='pb-10'>
          <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
            Featured Projects
          </span>
        </div>
        {data?.data?.map((project) => {
          if (project.attributes.isFeatured) {
            return (
              <div className='container pb-10' key={project.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_CMS_HOST}${project.attributes.thumbnail.data.attributes.url}`}
                  className='w-screen bg-cover bg-center'
                  alt={project.attributes.title}
                />
                <div className='flex flex-col pt-4'>
                  <h3 className='font-vinila text-2xl text-gray-50 tracking-wide font-light'>
                    {project.attributes.title}
                  </h3>
                  <span className='font-neue text-3xs uppercase text-gray-50 tracking-wider'>
                    Financial | Design & Build
                  </span>
                </div>
              </div>
            )
          }
        })}
        <div className='flex justify-center items-center'>
          <a href='/project'>
            <span className='font-neue text-3xs text-gray-50 uppercase tracking-wider'>
              All Projects
            </span>
          </a>
        </div>
      </div>
    )
  )
}
