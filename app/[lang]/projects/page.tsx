import { ProjectsWrapper } from './components'

export default async function ProjectsPage() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 lg:py-28 px-4 lg:px-0 overflow-x-hidden'>
      <h1 className='hidden lg:block text-2xl py-10 font-thin'>Projects</h1>
      <ProjectsWrapper />
    </div>
  )
}
