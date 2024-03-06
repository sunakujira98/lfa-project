'use client'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { ServiceWithImage } from '@/components/shared/ServiceWithImage'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'

export function ServiceSection() {
  const { isSuccess, data } = useGetAllServiceQuery()

  return (
    <>
      <div className='container md:py-28 py-10 px-4 md:px-0'>
        <SectionHeader
          displayName='Services'
          title='Explore the pinnacle of commercial interior design in Singapore
              with LFA Studio, a name synonymous with excellence in office and
              commercial space transformations.'
          subtitle='Our award-winning office designs and corporate interior solutions
              are tailored to meet the unique demands of a diverse clientele.
              Specialising in both commercial and office interior design in
              Singapore, we take pride in our ability to turn ordinary spaces
              into extraordinary workplaces.'
        />
      </div>
      {isSuccess && (
        <div className='container'>
          <div className='flex flex-col'>
            {data.data.map((service) => {
              return <ServiceWithImage service={service} />
            })}
          </div>
        </div>
      )}
    </>
  )
}
