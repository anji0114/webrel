export type TProject = {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  urls: TProjectUrl[];
};

export type TProjectPayload = Pick<TProject, 'name' | 'description'> & {
  url: string;
};

export type TProjectEditPayload = Pick<TProject, 'name' | 'description'>;

// page
export type TProjectPage = {
  id: string;
  projectId: string;
  name: string;
  path: string;
  level: number;
};

export type TProjectUrl = {
  id: string;
  url: string;
};
