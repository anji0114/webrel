import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { ProjectPageItemMenu } from '@/features/project/components/ProjectPages/ProjectPageItemMenu';

type TProjectPageItemProps = {
  name: string;
  path: string;
  url: string;
  onDeleteModalOpen: () => void;
  onEditModalOpen: () => void;
};

export const ProjectPageItem: FC<TProjectPageItemProps> = ({
  name,
  path,
  url,
  onDeleteModalOpen,
  onEditModalOpen,
}) => {
  return (
    <div className='p-3 px-4 flex items-center justify-between'>
      <div className='w-[25%] flex items-center'>
        <span className='text-sm'>{name}</span>
      </div>
      <div className='w-[20%] flex items-center'>
        <span className='text-sm'>{path}</span>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
        <ProjectPageItemMenu
          onDeleteModalOpen={onDeleteModalOpen}
          onEditModalOpen={onEditModalOpen}
        />
      </div>
      <div className='w-[10%] flex items-center justify-center'>
        <a
          href={`${url}${path}`}
          target='_blank'
          className='inline-block w-5 h-5 text-accent'
        >
          <ArrowTopRightOnSquareIcon />
        </a>
      </div>
    </div>
  );
};
