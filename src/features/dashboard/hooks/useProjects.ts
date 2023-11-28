import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import { fetchProjectListApi } from '@/services/projectApi';
import { ApiError } from '@/types/api';
import { TProject } from '@/types/project';

export const useProjects = () => {
  const {
    data: projects,
    isLoading: projectsLoading,
    error: projectsError,
  } = useQuery<TProject[], ApiError>({
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
