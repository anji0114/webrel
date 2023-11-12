'use client';

import { FC } from 'react';
import { ErrorArea } from '@/components/common/ErrorArea';
import { LoadingArea } from '@/components/common/LoadingArea';
import { ProjectPages } from '@/features/project/components/ProjectPages';
import { ProjectSort } from '@/features/project/components/ProjectSort';
import { useProject } from '@/features/project/hooks/useProject';

type TProjectMainProps = {
  projectId: string;
};

export const ProjectMain: FC<TProjectMainProps> = ({ projectId }) => {
  const { data, isLoading, error } = useProject(projectId);

  if (isLoading) return <LoadingArea />;

  if (error) {
    return <ErrorArea text={error.message} />;
  }

  return (
    <div>
      <h1 className='font-bold text-3xl pb-6 border-b border-gray-400'>
        {data?.name}
      </h1>

      <div className='mt-4'>
        <ProjectSort projectId={projectId} />
        <div className='mt-10'>
          <ProjectPages pages={data?.pages} />
        </div>
      </div>
    </div>
  );
};
