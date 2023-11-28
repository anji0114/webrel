import axios from 'axios';
import { TPagePayload } from '@/features/project/types/page';
import { TApiResponse } from '@/types/api';
import { TProjectPage } from '@/types/project';

export const fetchProjectPagesApi = async (projectId: string) => {
  try {
    const response = await axios.get<TApiResponse<TProjectPage[]>>(
      `/api/projects/${projectId}/pages`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project pages');
  }
};

export const fetchProjectPageDetailAPi = () => {};

export const updateProjectPageApi = async (
  projectId: string,
  pageId: string,
  payload: Omit<TPagePayload, 'level'>,
) => {
  try {
    await axios.patch(`/api/projects/${projectId}/pages/${pageId}`, {
      name: payload.name,
      path: payload.path,
    });
  } catch {
    throw new Error('Failed to put project pages');
  }
};

export const deleteProjectPageApi = async (
  projectId: string,
  pageId: string,
) => {
  try {
    await axios.delete(`/api/projects/${projectId}/pages/${pageId}`);
  } catch (error) {
    throw new Error('Failed to fetch project pages');
  }
};
