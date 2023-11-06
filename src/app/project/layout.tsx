import { FC, ReactNode } from 'react';

type TProjectLayoutProps = {
  children: ReactNode;
  params: {
    id: string;
  };
};

const ProjectLayout: FC<TProjectLayoutProps> = ({ children, params }) => {
  console.log(params.id);

  return <div>{children}</div>;
};

export default ProjectLayout;
