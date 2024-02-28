import { ProjectDetail } from '../components/ProjectDetail'

type Props = {
  params: {
    projectId: string
  }
}
export default async function ProjectsPage({ params: { projectId } }: Props) {
  return <ProjectDetail projectId={projectId} />
}
