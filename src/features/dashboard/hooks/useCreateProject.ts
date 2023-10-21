import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { QUERY_KEYS } from '@/constants/queryKey';
import { createProjectApi } from '@/services/projectApi';
import { TProjectPayload } from '@/types/project';

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
