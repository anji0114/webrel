'use client';

import { FC } from 'react';
import { SettingDelete } from '@/features/projectSetting/components/SettingDelete';

type TSettingContentProps = {
  projectId: string;
};

export const SettingContent: FC<TSettingContentProps> = ({ projectId }) => {
  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold pb-5 border-b border-gray-400'>
        プロジェクト設定
      </h2>
      <SettingDelete projectId={projectId} />
    </div>
  );
};
