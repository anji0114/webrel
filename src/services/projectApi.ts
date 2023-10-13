import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from '@/constants/queryKey';
import { TApiResponse } from '@/types/api';
import { TProject, TProjectPayload } from '@/types/project';

export const fetchProjectListApi = async (): Promise<TProject[]> => {
  try {
    const response =
      await axios.get<TApiResponse<TProject[]>>(`/api/projects/`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project list.');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useProjectList = () => {
  const { data, isLoading, error } = useQuery<TProject[]>({
    queryKey: [QUERY_KEYS.PROJECT.FETCH_PROJECTS],
    queryFn: async () => {
      return fetchProjectListApi();
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export const createProjectApi = async (
  payload: TProjectPayload,
): Promise<TProject> => {
  const response = await axios.post<TApiResponse<TProject>>(
    '/api/projects',
    payload,
  );
  return response.data.data;
};

export const useCreateProject = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: async (payload: TProjectPayload) => {
      return createProjectApi(payload);
    },
    onSuccess: () => {},
  });

  return [mutate, isLoading, error];
};
