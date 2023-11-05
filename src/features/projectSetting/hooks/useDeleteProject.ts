import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { deleteProjectApi } from '../services/deleteProjectApi';
import { QUERY_KEYS } from '@/constants/queryKey';

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    mutate: deleteProject,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async (id: string) => {
      await deleteProjectApi(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PROJECT.FETCH_PROJECTS]);
      router.push('/dashboard');
    },
    onError: () => {
      console.log('失敗');
    },
  });

  return { deleteProject, isLoading, error };
};
