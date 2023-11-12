export type TProject = {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  pages: TProjectPage[];
};

export type TProjectPayload = Pick<TProject, 'name' | 'description'>;

export type TProjectPage = {
  id: string;
  projectId: string;
  name: string;
  path: string;
  level: number;
};
