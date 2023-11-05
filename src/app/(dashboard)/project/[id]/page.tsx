import { ProjectMain } from '@/features/project/components/ProjectMain';

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = params;

  return <ProjectMain id={id} />;
};

export default page;
