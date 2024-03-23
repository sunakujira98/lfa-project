'use client'

import { useParams } from 'next/navigation'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { ServiceWithImage } from '@/components/shared/ServiceWithImage'
import { StrapiResponse } from '@/domain/types/common.types'
import { TService } from '@/domain/types/services.types'
import { useGetAllServiceQuery } from '@/hooks/query/useServiceQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'
import { findTranslatedData } from '@/utils/FindTranslatedData/FindTranslatedData'

export function ServiceSection() {
  const { lang } = useParams()
  const { t } = useTranslation()
  const { isSuccess, data } = useGetAllServiceQuery()

  const localizedData = findTranslatedData(
    lang as string,
    data,
  ) as StrapiResponse<TService>

  const services = isSuccess
    ? localizedData.data.length > 0
      ? localizedData.data
      : data?.data
    : []

  return (
    <>
      <div className='container pt-28 pb-10 lg:py-28'>
        <SectionHeader
          displayName={t('services.title')}
          title={t('services.subtitle')}
          subtitle={t('services.description')}
        />
      </div>
      {isSuccess && (
        <div className='flex flex-col'>
          {services.map((service) => {
            return <ServiceWithImage service={service} />
          })}
        </div>
      )}
    </>
  )
}
