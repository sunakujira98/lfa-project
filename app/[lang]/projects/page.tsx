import { ProjectsWrapper } from './components'

export default async function ProjectsPage() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 md:py-28 px-4 md:px-0 overflow-x-hidden'>
      <h1 className='text-2xl py-10 font-thin'>Projects</h1>
      <div className='container'>
        <ProjectsWrapper />
      </div>
    </div>
  )
}
