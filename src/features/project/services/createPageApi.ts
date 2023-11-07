import axios from 'axios';
import { TPage, TPagePayload } from '@/features/project/types/page';
import { TApiResponse } from '@/types/api';

export const createPageApi = async (
  payload: TPagePayload,
  projectId: string,
): Promise<TPage> => {
  try {
    const response = await axios.post<TApiResponse<TPage>>(
      `/api/projects/${projectId}/page`,
      payload,
    );
    return response.data.data;
  } catch {
    throw new Error('Failed to post project page.');
  }
};
