import axios from 'axios';
import { TProjectEditPayload } from '@/types/project';

export const editProjectApi = async (
  id: string,
  payload: TProjectEditPayload,
): Promise<void> => {
  try {
    await axios.put(`/api/projects/${id}`, payload);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
