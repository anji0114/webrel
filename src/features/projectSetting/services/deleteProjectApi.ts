import axios from 'axios';
import { TProject } from '@/types/project';

export const deleteProjectApi = async (id: string): Promise<TProject> => {
  try {
    const response = await axios.delete(`/api/projects/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project');
  }
};
