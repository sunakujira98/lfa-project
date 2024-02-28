import { ProjectsWrapper } from './components'

export default async function ProjectsPage() {
  return (
    <div className='max-w-screen-xl mx-auto py-28'>
      <h1 className='text-2xl py-10 font-thin'>Projects</h1>
      <div className='container'>
        <ProjectsWrapper />
      </div>
    </div>
  )
}
