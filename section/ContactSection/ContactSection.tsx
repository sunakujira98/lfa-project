'use client'

import { useForm } from 'react-hook-form'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { CircleArrowDownIcon } from '@/components/shared/svg/icons'
import { useGetContactQuery } from '@/hooks/query/useContactQuery'
import { Disclosure } from '@headlessui/react'
import { ControlledTextarea } from '@/components/shared/Forms/ControlledTextarea'
import { ControlledInput } from '@/components/shared/Forms/ControlledInput'

export function ContactSection() {
  const { data, isSuccess } = useGetContactQuery()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  return (
    isSuccess && (
      <>
        <div className='container py-28'>
          <SectionHeader
            displayName={data.data.attributes.displayName}
            title={data.data.attributes.title}
            subtitle={data.data.attributes.subtitle}
          />
        </div>
        <div className='container'>
          <Disclosure defaultOpen>
            <div className='flex justify-between gap-40 py-4 border-t-[1px] border-b-[1px]'>
              <div className='w-1/3'></div>
              <div className='w-2/3'>
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
              <div className='w-1/3'></div>
              <div className='w-2/3'>
                <Disclosure.Panel>
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-1/4'>
                      <h4>Enquiry Type</h4>
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
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-1/4'>
                      <h4>Name</h4>
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
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-1/4'>
                      <h4>Email</h4>
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
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-1/4'>
                      <h4>Contact No.</h4>
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
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-1/4'>
                      <h4>Your Company Name</h4>
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
                  <div className='flex flex-row items-center gap-8 border-b-[1px] py-2'>
                    <div className='flex w-full flex-grow justify-between'>
                      <div className='flex flex-row items-center gap-2'>
                        <input type='checkbox' />
                        <span className='text-xs'>
                          I have read and accept the Privacy Policy and Terms &
                          Conditions
                        </span>
                      </div>
                      <button className='outline-button'>Send</button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </div>
          </Disclosure>
        </div>
      </>
    )
  )
}
