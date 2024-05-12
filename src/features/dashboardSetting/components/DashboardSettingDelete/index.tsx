import { FC } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

type TTemplateProps = {
  onDelete: () => void;
};

export const DashboardSettingDeleteTemplate: FC<TTemplateProps> = () => {
  return (
    <Card className='shadow-none border-danger-light bg-danger bg-opacity-5'>
      <p className='text-danger text-lg font-medium'>
        データは完全に削除されます
      </p>
      <p className='text-danger'>
        一度アカウントを削除すると、復元することはできません。
      </p>
      <div className='mt-2'>
        <Button color='grayRed' size='sm'>
          アカウントを削除する
        </Button>
      </div>
    </Card>
  );
};

export const DashboardSettingDelete: FC = () => {
  const onDelete = () => {};
  return <DashboardSettingDeleteTemplate onDelete={onDelete} />;
};
