import axios from 'axios';
import { TApiResponse } from '@/types/api';
import { TProfile } from '@/types/profile';

export const profileApi = async (): Promise<TProfile> => {
  try {
    const response = await axios.get<TApiResponse<TProfile>>('/api/profile');
    return response.data.data;
  } catch {
    return Promise.reject();
  }
};
