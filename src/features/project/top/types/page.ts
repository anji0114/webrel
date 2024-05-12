export type TPage = {
  id: string;
  name: string;
  path: string;
  projectId: string;
  level: number;
  createdAt: string;
  updatedAt: string;
  parentId?: string;
  status?: string;
};

export type TPagePayload = {
  name: string;
  path: string;
  level: number;
};
