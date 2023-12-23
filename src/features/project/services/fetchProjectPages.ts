import axios from 'axios';
import { TPage } from '@/features/project/types/page';
import { TApiResponse } from '@/types/api';

export const fetchProjectPagesApi = async (id: string) => {
  try {
    const response = await axios.get<TApiResponse<TPage[]>>(
      `/api/projects/${id}/pages`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project pages');
  }
};
