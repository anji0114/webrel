'use client';

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { Button, Input } from '@/components/elements';
import { PageCreateModal } from '@/features/project/components/PageCreateModal';
import { useVisible } from '@/hooks/useVisible';

type TProjectSortProps = {
  projectId: string;
};

export const ProjectSort: FC<TProjectSortProps> = ({ projectId }) => {
  const { visible, setVisibleTrue, setVisibleFalse } = useVisible();

  return (
    <>
      <div className='flex gap-8'>
        <div className='relative w-[260px]'>
          <Input
            size='sm'
            className='w-full pl-10 bg-white'
            placeholder='/service'
          />
          <MagnifyingGlassIcon className='absolute left-2 top-1/2 -translate-y-1/2 w-4' />
        </div>
        <div className='ml-auto'>
          <Button
            onClick={setVisibleTrue}
            size='sm'
            color='blue'
            icon={<PlusIcon />}
          >
            新規URL
          </Button>
        </div>
      </div>
      <PageCreateModal
        projectId={projectId}
        open={visible}
        onCancel={setVisibleFalse}
      />
    </>
  );
};
