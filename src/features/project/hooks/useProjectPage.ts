import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import {
  deleteProjectPageApi,
  updateProjectPageApi,
} from '@/features/project/services/projectPagesApi';
import { TPagePayload } from '@/features/project/types/page';

export const useUpdateProjectPage = (projectId: string, pageId: string) => {
  const queryClient = useQueryClient();

  const { mutate: updateProjectPage, isLoading } = useMutation({
    mutationFn: async (payload: Omit<TPagePayload, 'level'>) => {
      updateProjectPageApi(projectId, pageId, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.PROJECT.FETCH_PROJECT,
        projectId,
      ]);
    },
  });

  return { updateProjectPage, isLoading };
};

export const useDeleteProjectPage = (projectId: string, pageId: string) => {
  const queryClient = useQueryClient();
  const { mutate: deleteProjectPage, isLoading } = useMutation({
    mutationFn: async () => {
      deleteProjectPageApi(projectId, pageId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEYS.PROJECT.FETCH_PROJECT,
        projectId,
      ]);
    },
  });

  return { deleteProjectPage, isLoading };
};
