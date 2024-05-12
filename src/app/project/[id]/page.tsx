import { NextPage } from 'next';
import { ProjectMain } from '@/features/project/top/components/ProjectMain';

interface PageProps {
  params: {
    id: string;
  };
}

const page: NextPage<PageProps> = async ({ params }) => {
  const { id } = params;

  return <ProjectMain projectId={id} />;
};

export default page;
