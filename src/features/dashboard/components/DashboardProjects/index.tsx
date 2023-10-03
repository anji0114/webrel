import { FC } from 'react';
import { DashboardProject, TDashboardProject } from '../DashboardProject';

type TDashboardProjects = {
  title: string;
  projects: TDashboardProject[];
};

export const DashboardProjects: FC<TDashboardProjects> = ({
  title,
  projects,
}) => {
  return (
    <div>
      <h2 className='text-xl font-bold leading-none'>{title}</h2>
      <ul className='mt-8 flex flex-wrap gap-4'>
        {projects
          ? projects.map((project) => (
              <DashboardProject
                key={project.id}
                id=''
                title={project.title}
                description={project.description}
                updatedAt={project.updatedAt}
                className='w-full lg:w-[calc((100%_-_16px)_/_2)] xl:w-[calc((100%_-_16px_*_2)_/_3)]'
              />
            ))
          : 'なし'}
      </ul>
    </div>
  );
};
