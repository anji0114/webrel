import { FC, ReactNode } from 'react';
import { LoginHeader } from '@/app/components/Header/LoginHeader';
import { ProjectAside } from '@/app/project/components/ProjectAside';

type TProjectLayoutProps = {
  children: ReactNode;
};

const ProjectLayout: FC<TProjectLayoutProps> = ({ children }) => {
  return (
    <div className='bg-gray-200'>
      <LoginHeader />
      <div className='pt-[70px]  min-h-screen md:pl-[240px]'>
        <ProjectAside />
        <main className='p-8'>{children}</main>
      </div>
    </div>
  );
};

export default ProjectLayout;
