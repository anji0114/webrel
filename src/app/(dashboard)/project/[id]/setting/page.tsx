import { SettingContent } from '@/features/projectSetting/components/SettingContent';

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = params;

  return <SettingContent id={id} />;
};

export default page;
