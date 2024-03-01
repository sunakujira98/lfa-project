'use client'

import { ServiceWithImage } from '@/components/shared/ServiceWithImage'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'

export function ServiceSection() {
  const { isSuccess, data } = useGetAllServiceQuery()

  return (
    <>
      <div className='container py-28'>
        <div className='flex justify-between gap-40'>
          <h3 className='font-thin w-1/3'>Services</h3>
          <div className='flex flex-col w-2/3'>
            <h4 className='font-thin' style={{ paddingBottom: '50px' }}>
              Explore the pinnacle of commercial interior design in Singapore
              with LFA Studio, a name synonymous with excellence in office and
              commercial space transformations.
            </h4>
            <span className='text-xs font-thin'>
              Our award-winning office designs and corporate interior solutions
              are tailored to meet the unique demands of a diverse clientele.
              Specialising in both commercial and office interior design in
              Singapore, we take pride in our ability to turn ordinary spaces
              into extraordinary workplaces.
            </span>
          </div>
        </div>
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
