import { useMutation } from '@tanstack/react-query';
import { createPageApi } from '@/features/project/services/createPageApi';
import { TPagePayload } from '@/features/project/types/page';

export const useCreatePage = (projectId: string) => {
  // const queryClient = useQueryClient();

  const { mutate: createPage, isLoading } = useMutation({
    mutationFn: async (payload: TPagePayload) => {
      return createPageApi(payload, projectId);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      console.log('エラー');
    },
  });

  return { createPage, isLoading };
};
