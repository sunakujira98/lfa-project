'use client'

import { News } from '@/components/shared/News'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { SideBySideTestimonial } from '@/components/shared/SideBySideTestimonial'
import { useGetAllArticleQuery } from '@/hooks/query/useGetArticleQuery'

export function NewsSection() {
  const { isSuccess, data } = useGetAllArticleQuery()

  return (
    <>
      <div className='container py-28'>
        <SectionHeader
          displayName='News'
          title='Explore the latest in commercial and office interior design with
          LFA Studio.'
          subtitle="Discover insights into Singapore's top commercial interior design
          firms, including award-winning office designs and innovative
          workplace concepts. Our news section showcases the best office
          interior design trends, highlighting significant commercial
          interior projects and office renovation stories in Singapore. From
          corporate interior design in Singapore to office renovation cost
          considerations, stay ahead with LFA Studio's compelling updates on
          commercial office interior design and interior design for
          commercial spaces. Join us as we celebrate the art of transforming
          spaces, whether through an office interior renovation or a
          complete commercial office renovation, and see why we are among
          the best in corporate office interior design."
        />
      </div>
      {isSuccess && (
        <div className='container border-t-[1px]'>
          <div className='grid grid-cols-3 gap-6'>
            {data.data.map((news) => {
              return <News news={news} />
            })}
          </div>
        </div>
      )}
    </>
  )
}
