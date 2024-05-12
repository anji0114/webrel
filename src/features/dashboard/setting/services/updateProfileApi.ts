import axios from 'axios';
import { TApiResponse } from '@/types/api';
import { TProfile } from '@/types/profile';

type TUpdateProfileApiPayload = {
  name: string;
  occupation: string;
  accountId: string;
};

export const updateProfileApi = async (
  payload: TUpdateProfileApiPayload,
): Promise<TProfile> => {
  try {
    const response = await axios.put<TApiResponse<TProfile>>(
      '/api/profile',
      payload,
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(new Error('予期せぬエラーが発生いたしました。'));
    }
  }
};
