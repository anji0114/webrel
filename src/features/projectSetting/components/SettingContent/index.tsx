'use client';

import { FC } from 'react';
import { SettingDelete } from '@/features/projectSetting/components/SettingDelete';
import { SettingMember } from '@/features/projectSetting/components/SettingMember';
import { SettingStatus } from '@/features/projectSetting/components/SettingStatus';

type TSettingContentProps = {
  id: string;
};

export const SettingContent: FC<TSettingContentProps> = ({ id }) => {
  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold pb-5 border-b border-gray-400'>
        プロジェクト設定
      </h2>
      <SettingStatus />
      <SettingMember />
      <SettingDelete id={id} />
    </div>
  );
};
