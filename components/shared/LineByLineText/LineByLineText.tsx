import { twMerge } from 'tailwind-merge'

import { AvailableComponents } from '@/domain/types/common.types'

type LineByLineComponent = {
  id: number
  __component: AvailableComponents
  description: string
  title: {
    id: number
    text: string
    fontFamily: string
  }[]
}

type LineByLineTextProps = {
  data: LineByLineComponent
}

export function LineByLineText({ data }: LineByLineTextProps) {
  return (
    <div className='flex justify-center items-center max-md:h-screen lg:mt-[183px] mb-[183px]'>
      <div className='container'>
        <div className='flex items-center mx-auto max-w-[65%]'>
          <div className='flex flex-col items-center'>
            {data.title.map((title) => {
              const fontFamily =
                title.fontFamily === 'keppler'
                  ? 'font-keppler font-thin'
                  : 'font-vinila font-thin'

              return (
                <h1
                  className={twMerge(
                    'text-3xl lg:text-6xl lg:my-[-20px]',
                    fontFamily,
                  )}
                  key={title.id}
                >
                  {title.text}
                </h1>
              )
            })}
            <p className='text-center py-6 neue-normal w-full lg:w-[37%]'>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
