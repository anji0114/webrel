import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from '@/constants/queryKey';
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

export const useProject = (id: string) => {
  const { data, isLoading, error } = useQuery<TProject>({
    queryKey: [QUERY_KEYS.PROJECT.FETCH_PROJECT, id],
    queryFn: async () => {
      return fetchProjectApi(id);
    },
  });

  return { data, isLoading, error };
};
