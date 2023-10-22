import axios from 'axios';
import { TApiResponse } from '@/types/api';
import { TProject, TProjectPayload } from '@/types/project';

export const fetchProjectListApi = async (): Promise<TProject[]> => {
  try {
    const response =
      await axios.get<TApiResponse<TProject[]>>(`/api/projects/`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project list.');
  }
};

export const createProjectApi = async (
  payload: TProjectPayload,
): Promise<TProject> => {
  const response = await axios.post<TApiResponse<TProject>>(
    '/api/projects',
    payload,
  );
  return response.data.data;
};
