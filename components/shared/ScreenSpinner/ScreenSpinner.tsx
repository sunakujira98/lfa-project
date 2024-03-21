import { Spinner } from '../Spinner'

export function ScreenSpinner() {
  return (
    <div className='fixed left-0 top-0 z-50 block h-full w-full bg-white dark:bg-neutral-950 opacity-75 overflow-hidden'>
      <div className='relative top-1/2 my-0 block h-0 w-full text-neutral-950 dark:text-neutral-50 opacity-75'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <Spinner />
          <h6 className='uppercase'>Loading...</h6>
        </div>
      </div>
    </div>
  )
}
