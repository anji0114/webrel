import { NextPage } from 'next';
import { SettingContent } from '@/features/projectSetting/components/SettingContent';

interface PageProps {
  params: {
    id: string;
  };
}

const page: NextPage<PageProps> = async ({ params }) => {
  const { id } = params;

  return <SettingContent projectId={id} />;
};

export default page;
