import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { editProjectApi } from '@/features/projectSetting/services/editProjectApi';
import { ProjectEditValidator } from '@/libs/validators/project';
import { useToast } from '@/states/Toast';

type TSettingEditProps = {
  projectId: string;
  name: string;
  description: string | undefined;
};

type FormData = z.infer<typeof ProjectEditValidator>;

export const SettingEdit: FC<TSettingEditProps> = ({
  projectId,
  name,
  description,
}) => {
  const openToast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: { name, description },
    resolver: zodResolver(ProjectEditValidator),
  });

  const nameValue = watch('name');

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload: FormData) => {
      await editProjectApi(projectId, payload);
    },
    onSuccess: () => {
      openToast({ children: '保存しました', type: 'success' });
    },
    onError: () => {},
  });

  const onEdit = (payload: FormData) => {
    if (!nameValue) return;
    mutate(payload);
  };

  return (
    <>
      <Card>
        <h2 className='text-xl leading-tight font-bold'>プロジェクト編集</h2>
        <div className='mt-6 space-y-4'>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              プロジェクト名
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Input
                className='w-full'
                placeholder='入力してください'
                {...register('name')}
              />
              {errors.name && (
                <p className='mt-1 text-danger text-sm'>
                  {errors.name.message}
                </p>
              )}
            </dd>
          </dl>
          <dl className='md:flex'>
            <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
              プロジェクト説明
            </dt>
            <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
              <Textarea
                maxRows={4}
                className='w-full'
                {...register('description')}
              />
              {errors.description && (
                <p className='mt-1 text-danger text-sm'>
                  {errors.description.message}
                </p>
              )}
            </dd>
          </dl>
          <div className='ml-auto w-[120px]'>
            <Button
              fullWidth
              color='blue'
              size='sm'
              onClick={handleSubmit(onEdit)}
              disabled={!nameValue}
              isLoading={isLoading}
            >
              保存する
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
