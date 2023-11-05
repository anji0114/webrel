import { FC } from 'react';
import { Button } from '@/components/elements';
import { DashboardProject } from '@/features/dashboard/components/DashboardProject';
import { DashboardProjectsLoading } from '@/features/dashboard/components/DashboardProjectsLoading';
import { ApiError } from '@/types/api';
import { TProject } from '@/types/project';

export type TDashboardProject = Omit<TProject, 'createdAt'>;

type TDashboardProjectsProps = {
  projects: TDashboardProject[] | undefined;
  modalOpen?: () => void;
  isLoading?: boolean;
  isError: ApiError | null;
  isJoin?: boolean;
};

export const DashboardProjects: FC<TDashboardProjectsProps> = ({
  projects,
  modalOpen,
  isLoading,
  isError,
  isJoin,
}) => {
  if (isLoading) return <DashboardProjectsLoading />;

  if (isError) {
    return (
      <p className='p-6 text-danger-light bg-white text-center border border-dashed border-danger-light rounded-lg'>
        プロジェクトの取得に失敗しました。
        <br />
        少し時間を置いてから再度お試しください。
      </p>
    );
  }

  return (
    <ul className='flex flex-wrap gap-4'>
      {projects?.length ? (
        <>
          {projects.map((project) => (
            <DashboardProject
              key={project.id}
              id={project.id}
              name={project.name}
              ownerId={project.ownerId}
              description={project.description}
              updatedAt={project.updatedAt}
              className='w-full lg:w-[calc((100%_-_16px)_/_2)] xl:w-[calc((100%_-_16px_*_2)_/_3)]'
            />
          ))}
        </>
      ) : (
        <div className='w-full p-6 text-center border border-dashed border-gray-400 rounded-lg bg-white shadow-sm'>
          {isJoin ? (
            <p>参加中のプロジェクトはありません</p>
          ) : (
            <>
              <p>
                プロジェクトがありません。
                <br />
                新しいプロジェクトを作成しましょう。
              </p>
              <div className='mt-4'>
                <Button color='dark' size='sm' onClick={modalOpen}>
                  プロジェクトを作成する
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </ul>
  );
};
