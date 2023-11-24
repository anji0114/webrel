'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { Button } from '@/components/elements';
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
