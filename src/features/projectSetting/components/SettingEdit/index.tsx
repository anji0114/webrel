import { FC } from 'react';
import { Button, Card, Input, Textarea } from '@/components/elements';

type TSettingEditProps = {
  name: string | undefined;
};

export const SettingEdit: FC<TSettingEditProps> = ({ name }) => {
  return (
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
              value={name}
              placeholder='Webアプリケーション開発'
            />
          </dd>
        </dl>
        <dl className='md:flex'>
          <dt className=' font-medium leading-none md:pt-4 md:w-[140px]'>
            プロジェクト説明
          </dt>
          <dd className='mt-4 w-full md:mt-0 md:w-[calc(100%_-_140px)]'>
            <Textarea maxRows={4} className='w-full' />
          </dd>
        </dl>
        <div className='ml-auto w-[120px]'>
          <Button fullWidth color='blue' size='sm'>
            保存する
          </Button>
        </div>
      </div>
    </Card>
  );
};
