import { FC, ReactNode } from 'react';
import { Card } from '@/components/ui/Card';

type TDashboardSettingCardProps = {
  title: string;
  children: ReactNode;
};

export const DashboardSettingCard: FC<TDashboardSettingCardProps> = ({
  title,
  children,
}) => {
  return (
    <Card className='bg-opacity-60 p-0'>
      <h3 className='text-xl font-bold  border-b border-gray-300 py-4 px-6'>
        {title}
      </h3>
      <div className='px-6 py-4'>{children}</div>
    </Card>
  );
};
