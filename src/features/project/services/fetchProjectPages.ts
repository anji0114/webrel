import axios from 'axios';
import { TApiResponse } from '@/types/api';
import { TProjectPage } from '@/types/project';

export const fetchProjectPagesApi = async (id: string) => {
  try {
    const response = await axios.get<TApiResponse<TProjectPage[]>>(
      `/api/projects/${id}/pages`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project pages');
  }
};
