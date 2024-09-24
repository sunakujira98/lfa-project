'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import parse from 'html-react-parser'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { ControlledCheckbox } from '@/components/shared/Forms/ControlledCheckbox'
import { ControlledInput } from '@/components/shared/Forms/ControlledInput'
import { ControlledTextarea } from '@/components/shared/Forms/ControlledTextarea'
import { SelectOption } from '@/components/shared/Forms/SelectOption'
import { MapComponent } from '@/components/shared/Map'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { useSendMailMutation } from '@/hooks/query/useContactQuery'
import { useTranslation } from '@/resources/i18n/i18n.hooks'

import { getContactSchema } from './ContactSection.types'

type FormValues = yup.InferType<ReturnType<typeof getContactSchema>>

const enquiryType = [
  { value: 'General Enquiry', label: 'General Enquiry' },
  { value: 'Design & Build', label: 'Design & Build' },
  { value: 'Design Consultancy', label: 'Design Consultancy' },
  { value: 'Build', label: 'Build' },
  {
    value: 'Project & Procurement Management',
    label: 'Project & Procurement Management',
  },
]

export function ContactSection() {
  const { t } = useTranslation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getContactSchema()),
  })

  const sendMailMutation = useSendMailMutation()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    sendMailMutation.mutate(data)
  }

  useEffect(() => {
    if (sendMailMutation.isSuccess) {
      window.scrollTo(0, 0)
    }
  }, [sendMailMutation.isSuccess])

  return sendMailMutation.isSuccess ? (
    <div className='container pt-28 pb-10 lg:py-28 px-4 lg:px-0'>
      <SectionHeader
        displayName={t('contact.title')}
        title={t('contact.form.success.title')}
        subtitle={t('contact.form.success.subtitle')}
      />
      <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-40 pt-24'>
        <div className='w-full lg:w-1/3'></div>
        <div className='w-full lg:w-2/3'>
          <a href='/' className='outline-button-black uppercase text-3xs'>
            {t('contact.form.success.backToHome')}
          </a>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className='pt-28 pb-10 lg:py-28 px-4 lg:px-0'>
        <SectionHeader
          displayName={t('contact.title')}
          title={t('contact.subtitle')}
          subtitle={t('contact.description')}
        />
      </div>
      <div className='px-4 lg:px-0'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-row lg:justify-between gap-10 py-4 border-t-[1px] border-b-[1px] border-charcoal-100'>
            <div className='hidden lg:block lg:w-[30%]'></div>
            <div className='w-full lg:w-[70%]'>
              <div className='flex flex-row gap-5 lg:gap-[22px]'>
                <div className='w-1/4 max-md:pt-1'>
                  <div className='flex self-start relative'>
                    <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                      {t('contact.enquiryType')}
                    </h4>
                  </div>
                </div>
                <div className='flex flex-grow justify-between'>
                  <Controller
                    render={({ field: { value, onChange } }) => (
                      <SelectOption
                        options={enquiryType}
                        placeholder='Select enquiry type'
                        value={value}
                        onChange={onChange}
                      />
                    )}
                    defaultValue={enquiryType[0].value}
                    control={control}
                    name='enquiryType'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-10 py-4 border-b-[1px] border-charcoal-100'>
            <div className='hidden lg:block lg:w-[30%]'></div>
            <div className='w-full lg:w-[70%]'>
              <div className='flex relative gap-8 border-b-[1px] border-charcoal-100 py-6 h-44'>
                <div className='w-1/4 absolute top-0 left-0'>
                  <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                    {t('contact.form.enquiryType.label')}
                  </h4>
                </div>
                <div className='w-3/4 absolute top-0 left-[110px] lg:left-[240px]'>
                  <ControlledTextarea
                    control={control}
                    errors={errors}
                    placeholder={t('contact.form.enquiryType.placeholder')}
                    name='message'
                  />
                </div>
              </div>
              <div className='flex flex-row items-center gap-8 border-b-[1px] border-charcoal-100 py-6'>
                <div className='flex w-1/4'>
                  <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                    {t('contact.form.name.label')}
                  </h4>
                </div>
                <div className='flex w-3/4 flex-grow justify-between'>
                  <ControlledInput
                    control={control}
                    errors={errors}
                    name='name'
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>
              </div>
              <div className='flex flex-row items-center gap-8 border-b-[1px] border-charcoal-100 py-6'>
                <div className='flex w-1/4'>
                  <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                    {t('contact.form.email.label')}
                  </h4>
                </div>
                <div className='flex w-3/4 flex-grow justify-between'>
                  <ControlledInput
                    control={control}
                    errors={errors}
                    name='email'
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>
              <div className='flex flex-row items-center gap-8 border-b-[1px] border-charcoal-100 py-6'>
                <div className='flex w-1/4'>
                  <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                    {t('contact.form.contact.label')}
                  </h4>
                </div>
                <div className='flex w-3/4 flex-grow justify-between'>
                  <ControlledInput
                    control={control}
                    errors={errors}
                    name='contact'
                    placeholder={t('contact.form.contact.placeholder')}
                  />
                </div>
              </div>
              <div className='flex flex-row items-center gap-8 border-b-[1px] border-charcoal-100 py-6'>
                <div className='flex w-1/4'>
                  <h4 className='text-3xs font-light leading-4 lg:text-md lg:font-light lg:leading-8 lg:tracking-[0.24px]'>
                    {t('contact.form.companyName.label')}
                  </h4>
                </div>
                <div className='flex w-3/4 flex-grow justify-between'>
                  <ControlledInput
                    control={control}
                    errors={errors}
                    name='companyName'
                    placeholder={t('contact.form.companyName.placeholder')}
                  />
                </div>
              </div>
              <div className='flex flex-col lg:flex-row items-center gap-8 py-10 lg:py-6'>
                <div className='flex w-full flex-grow flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0'>
                  <div className='flex flex-row items-center gap-2'>
                    <ControlledCheckbox
                      name='privacyPolicy'
                      control={control}
                      type='checkbox'
                      errors={errors}
                      text={parse(
                        t('contact.form.termsAndConditions.label', {
                          privacyPolicyLink: '/privacy-policy',
                          termsAndConditionsLink: '/terms-and-conditions',
                        }),
                      )}
                    />
                  </div>
                  <button
                    className='outline-button-black uppercase text-3xs w-full lg:w-24'
                    type='submit'
                    disabled={sendMailMutation.isPending}
                  >
                    {t('contact.form.send')}
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-center pt-4'>
                <span className='text-[#C96115]'>
                  {sendMailMutation.isError && t('contact.form.error')}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-10 py-8 px-4 lg:px-0'>
        <h3 className='font-thin w-full lg:w-[30%]'>
          {t('contact.footer.joinLfa')}
        </h3>
        <div className='flex flex-col w-full lg:w-[70%]'>
          <h4 className='hidden lg:block font-thin lg:pb-20'>
            {t('contact.footer.title')}
          </h4>
          <span
            dangerouslySetInnerHTML={{ __html: t('contact.footer.subtitle') }}
            className='text-xs font-thin pb-10 [&>a]:underline [&>a]:underline-offset-4'
          ></span>
          <>
            <MapComponent />
          </>
        </div>
      </div>
    </>
  )
}
