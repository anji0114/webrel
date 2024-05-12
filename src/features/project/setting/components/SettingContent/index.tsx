'use client';

import { FC } from 'react';
import { LoadingArea } from '@/components/common/LoadingArea';
import { SettingDelete } from '@/features/project/setting/components/SettingDelete';
import { SettingEdit } from '@/features/project/setting/components/SettingEdit';
import { SettingStatuses } from '@/features/project/setting/components/SettingStatuses';
import { useProject } from '@/features/project/top/hooks/useProject';

type TSettingContentProps = {
  projectId: string;
};

export const SettingContent: FC<TSettingContentProps> = ({ projectId }) => {
  const { data, isLoading } = useProject(projectId);

  if (isLoading) {
    return <LoadingArea />;
  }

  if (!data) {
    return <p className='text-center'>プロジェクトは見つかりませんでした。</p>;
  }

  return (
    <div className='mx-auto max-w-[720px]'>
      <h2 className='text-3xl font-bold'>プロジェクト設定</h2>
      <div className='mt-8 space-y-4'>
        <SettingEdit
          projectId={projectId}
          name={data.name}
          description={data.description}
        />
        <SettingStatuses />
        <SettingDelete projectId={projectId} />
      </div>
    </div>
  );
};
