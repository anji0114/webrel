import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants/queryKey';
import { createPageApi } from '@/features/project/services/createPageApi';
import { TPagePayload } from '@/features/project/types/page';

export const useCreatePage = (projectId: string) => {
  const queryClient = useQueryClient();

  const { mutate: createPage, isLoading } = useMutation({
    mutationFn: async (payload: TPagePayload) => {
      return createPageApi(payload, projectId);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([
        QUERY_KEYS.PROJECT.FETCH_PROJECT,
        data.projectId,
      ]);
    },
    onError: () => {
      console.log('エラー');
    },
  });

  return { createPage, isLoading };
};
