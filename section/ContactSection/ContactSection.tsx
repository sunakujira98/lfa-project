'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { CircleArrowDownIcon } from '@/components/shared/svg/icons'
import { useGetContactQuery } from '@/hooks/query/useContactQuery'
import { Disclosure } from '@headlessui/react'
import { ControlledInput } from '@/components/shared/Forms/ControlledInput'
import { ControlledCheckbox } from '@/components/shared/Forms/ControlledCheckbox'
import { ControlledTextarea } from '@/components/shared/Forms/ControlledTextarea'

import { getContactSchema } from './ContactSection.types'

type FormValues = yup.InferType<ReturnType<typeof getContactSchema>>

export function ContactSection() {
  const { data, isSuccess } = useGetContactQuery()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getContactSchema()),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data)
  }

  return (
    isSuccess && (
      <>
        <div className='container pt-28 pb-10 md:py-28 px-4 md:px-0'>
          <SectionHeader
            displayName={data.data.attributes.displayName}
            title={data.data.attributes.title}
            subtitle={data.data.attributes.subtitle}
          />
        </div>
        <div className='container px-4 md:px-0'>
          <Disclosure defaultOpen>
            <div className='flex flex-row md:justify-between gap-40 py-4 border-t-[1px] border-b-[1px]'>
              <div className='hidden md:block md:w-1/3'></div>
              <div className='w-full md:w-2/3'>
                <div className='flex flex-row items-center gap-8'>
                  <div className='flex'>
                    <h4>Enquiry Type</h4>
                  </div>
                  <div className='flex flex-grow justify-between'>
                    <h4>General Enquiry</h4>
                    <div className='flex items-end'>
                      <Disclosure.Button>
                        <CircleArrowDownIcon />
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-40 py-4 border-b-[1px]'>
              <div className='hidden md:block md:w-1/3'></div>
              <div className='w-full md:w-2/3'>
                <Disclosure.Panel>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-row items-center gap-8 border-b-[1px] py-6'>
                      <div className='flex w-1/4'>
                        <h4 className='text-3xs md:text-xl'>Enquiry Type</h4>
                      </div>
                      <div className='flex w-3/4 flex-grow justify-between'>
                        <ControlledTextarea
                          control={control}
                          errors={errors}
                          placeholder='Your Message'
                          name='message'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-8 border-b-[1px] py-6'>
                      <div className='flex w-1/4'>
                        <h4 className='text-3xs md:text-xl'>Name</h4>
                      </div>
                      <div className='flex w-3/4 flex-grow justify-between'>
                        <ControlledInput
                          control={control}
                          errors={errors}
                          name='name'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-8 border-b-[1px] py-6'>
                      <div className='flex w-1/4'>
                        <h4 className='text-3xs md:text-xl'>Email</h4>
                      </div>
                      <div className='flex w-3/4 flex-grow justify-between'>
                        <ControlledInput
                          control={control}
                          errors={errors}
                          name='email'
                          placeholder='Your Email'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-8 border-b-[1px] py-6'>
                      <div className='flex w-1/4'>
                        <h4 className='text-3xs md:text-xl'>Contact No.</h4>
                      </div>
                      <div className='flex w-3/4 flex-grow justify-between'>
                        <ControlledInput
                          control={control}
                          errors={errors}
                          name='contact'
                          placeholder='Your Contact Number'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-8 border-b-[1px] pt-6 pb-10'>
                      <div className='flex w-1/4'>
                        <h4 className='text-2xs md:text-xl'>Company Name</h4>
                      </div>
                      <div className='flex w-3/4 flex-grow justify-between'>
                        <ControlledInput
                          control={control}
                          errors={errors}
                          name='companyName'
                          placeholder='Your Company Name'
                        />
                      </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-8 border-b-[1px] py-6'>
                      <div className='flex w-full flex-grow flex-col md:flex-row md:justify-between gap-10 md:gap-0'>
                        <div className='flex flex-row items-center gap-2'>
                          <ControlledCheckbox
                            name='privacyPolicy'
                            control={control}
                            type='checkbox'
                            errors={errors}
                          />
                        </div>
                        <button
                          className='outline-button !border-charcoal-100 w-full md:w-24'
                          type='submit'
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </Disclosure.Panel>
              </div>
            </div>
          </Disclosure>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-40 py-8 px-4 md:px-0'>
          <h3 className='font-thin w-full md:w-1/3'>Join LFA</h3>
          <div className='flex flex-col w-full md:w-2/3'>
            <h4 className='hidden md:block font-thin md:pb-12'>
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <span className='text-xs font-thin pb-10'>
              Lorem ipsum dolor sit amet consectetur. Consectetur malesuada
              proin pellentesque urna turpis malesuada. Tincidunt quis duis
              aenean morbi lobortis. Fermentum in aliquam pellentesque aenean
              vel et interdum vulputate. Ut a vel posuere est sed pulvinar
              libero at.
            </span>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12352.325803834814!2d103.79680076265387!3d1.304553861141499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1bb0df802e67%3A0xd82d4185f431e53e!2sLemonFridge%20Studio!5e0!3m2!1sen!2sid!4v1709571885757!5m2!1sen!2sid'
              className='w-full h-[300px] md:h-[500px] filter grayscale-[100%]'
              style={{ border: 0 }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </>
    )
  )
}
