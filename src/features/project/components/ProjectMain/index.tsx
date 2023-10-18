'use client';

import React, { FC } from 'react';
import { ProjectSort } from '@/features/project/components/ProjectSort';
import { ProjectUrls } from '@/features/project/components/ProjectUrls';
import { useProject } from '@/features/project/services/fetchProjectApi';

type TProjectMainProps = {
  id: string;
};

export const ProjectMain: FC<TProjectMainProps> = ({ id }) => {
  const { data, isLoading, error } = useProject(id);

  if (isLoading) return 'ローディング中';

  if (error) return 'エラー';

  return (
    <div>
      <h1 className='font-bold text-3xl pb-6 border-b border-gray-400'>
        {data?.name}
      </h1>

      <div className='mt-4'>
        <ProjectSort />
        <div className='mt-10'>
          <ProjectUrls />
        </div>
      </div>
    </div>
  );
};
