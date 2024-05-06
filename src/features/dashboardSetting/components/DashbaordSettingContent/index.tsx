'use client';
import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { LoadingArea } from '@/components/common/LoadingArea';
import { Card, Container } from '@/components/elements';
import { QUERY_KEYS } from '@/constants/queryKey';
import { DashboardSettingDelete } from '@/features/dashboardSetting/components/DashboardSettingDelete';
import { DashboardSettingProfile } from '@/features/dashboardSetting/components/DashboardSettingProfile';
import { profileApi } from '@/services/profileApi';

export const DashboardSettingContent = () => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.PROFILE.FETCH_PROFILE],
    async () => {
      return profileApi();
    },
  );

  if (isLoading) return <LoadingArea />;

  return (
    <Container maxWidth='800px'>
      <div className='space-y-5'>
        <DashboardSettingCard title='プロフィール'>
          <DashboardSettingProfile
            name={data?.name || ''}
            occupation={data?.occupation || ''}
            accountId={data?.accountId || ''}
            image={data?.image || ''}
          />
        </DashboardSettingCard>
        <DashboardSettingCard title='アカウントの削除'>
          <DashboardSettingDelete />
        </DashboardSettingCard>
      </div>
    </Container>
  );
};

type TDashboardSettingCardProps = {
  title: string;
  children: ReactNode;
};

const DashboardSettingCard: FC<TDashboardSettingCardProps> = ({
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
