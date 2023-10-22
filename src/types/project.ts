export type TProject = {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
};

export type TProjectPayload = Pick<TProject, 'name' | 'description'>;
