import axios from 'axios';
import { TApiResponse } from '@/types/api';
import { TProject } from '@/types/project';

export const fetchProjectApi = async (id: string): Promise<TProject> => {
  try {
    const response = await axios.get<TApiResponse<TProject>>(
      `/api/projects/${id}`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project');
  }
};
