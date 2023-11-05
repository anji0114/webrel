import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import { fetchProjectApi } from '@/features/project/services/fetchProjectApi';
import { TProject } from '@/types/project';

export const useProject = (id: string) => {
  const { data, isLoading, error } = useQuery<TProject>({
    queryKey: [QUERY_KEYS.PROJECT.FETCH_PROJECT, id],
    queryFn: async () => {
      return fetchProjectApi(id);
    },
  });

  return { data, isLoading, error };
};
