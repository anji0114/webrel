'use client';
import { FC, useState } from 'react';
import { ProjectCreateModal } from '@/components/common/ProjectCreateModal.tsx';
import { Button } from '@/components/elements/Button';
import { DashboardProjects } from '@/features/dashboard/components/DashboardProjects';
import { useProjectList } from '@/services/projectApi';

export const DashboardContent: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useProjectList();

  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        size='sm'
        variable
        color='dark'
        onClick={() => {
          setModalOpen(true);
        }}
      >
        新規プロジェクト
      </Button>

      <div className='mt-6'>
        <div>
          <h2 className='text-xl font-bold leading-none'>ANJI TANAKA</h2>
          <div className='mt-8'>
            <DashboardProjects
              projects={projects}
              isLoading={projectsLoading}
              isError={projectsError}
              modalOpen={() => {
                setModalOpen(true);
              }}
            />
          </div>
        </div>
        <hr className='border-t border-gray-400 -mx-8 my-10' />
        <div>
          <h2 className='text-xl font-bold leading-none'>
            参加中のプロジェクト
          </h2>
          <div className='mt-8'>
            <DashboardProjects projects={undefined} isJoin />
          </div>
        </div>
      </div>

      <ProjectCreateModal open={modalOpen} onCancel={onCancel} />
    </>
  );
};
