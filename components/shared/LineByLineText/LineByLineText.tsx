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
    <div className='max-w-screen-xl mx-auto py-'>
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
                  className={twMerge('text-6xl my-[-20px]', fontFamily)}
                  key={title.id}
                >
                  {title.text}
                </h1>
              )
            })}
            <p className='text-xs text-center pt-6 font-thin py-6'>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
