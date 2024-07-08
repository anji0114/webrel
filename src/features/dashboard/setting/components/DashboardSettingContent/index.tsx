'use client';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { LoadingArea } from '@/components/common/LoadingArea';
import { Container } from '@/components/ui/Container';
import { QUERY_KEYS } from '@/constants/queryKey';
import { DashboardSettingCard } from '@/features/dashboard/setting/components/DashboardSettingCard/';
import { DashboardSettingDelete } from '@/features/dashboard/setting/components/DashboardSettingDelete';
import { DashboardSettingProfile } from '@/features/dashboard/setting/components/DashboardSettingProfile';
import { profileApi } from '@/services/profileApi';
import { TProfile } from '@/types/profile';

export const DashboardSettingContent = () => {
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.PROFILE.FETCH_PROFILE],
    async () => {
      return profileApi();
    },
  );

  if (isLoading) return <LoadingArea />;

  return <DashboardSettingContentTemplate data={data} />;
};

type TDashboardSettingContentTemplateProps = {
  data: TProfile | undefined;
};

export const DashboardSettingContentTemplate: FC<
  TDashboardSettingContentTemplateProps
> = ({ data }) => {
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
