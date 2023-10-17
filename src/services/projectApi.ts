import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { QUERY_KEYS } from '@/constants/queryKey';
import { TApiResponse } from '@/types/api';
import { TProject, TProjectPayload } from '@/types/project';

const fetchProjectListApi = async (): Promise<TProject[]> => {
  try {
    const response =
      await axios.get<TApiResponse<TProject[]>>(`/api/projects/`);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch project list.');
  }
};

export const useProjectList = () => {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useQuery<TProject[], AxiosError>({
    queryKey: [QUERY_KEYS.PROJECT.FETCH_PROJECTS],
    queryFn: async () => {
      return fetchProjectListApi();
    },
  });

  return {
    projects,
    projectsLoading,
    projectsError,
  };
};

const createProjectApi = async (
  payload: TProjectPayload,
): Promise<TProject> => {
  const response = await axios.post<TApiResponse<TProject>>(
    '/api/projects',
    payload,
  );
  return response.data.data;
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    mutate: createProject,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async (payload: TProjectPayload) => {
      return createProjectApi(payload);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PROJECT.FETCH_PROJECTS]);
      router.push(`/project/${data.id}`);
    },
    onError: () => {
      console.log('失敗');
    },
  });

  return { createProject, isLoading, error };
};
