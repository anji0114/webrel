import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SettingStatusItem } from '@/features/projectSetting/components/SettingStatuses/SettingStatusItem';

export const SettingStatuses = () => {
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl leading-tight font-bold'>ステータス編集</h2>
        <Button size='sm' color='gray'>
          追加する
        </Button>
      </div>
      <div className='mt-6'>
        <SettingStatusItem statusName='未対応' statusColor='red' statusId='1' />
        <SettingStatusItem statusName='対応' statusColor='blue' statusId='1' />
        <SettingStatusItem
          statusName='対応'
          statusColor='lightBlue'
          statusId='1'
        />
        <SettingStatusItem statusName='対応' statusColor='green' statusId='1' />
        <SettingStatusItem
          statusName='対応'
          statusColor='yellow'
          statusId='1'
        />
        <SettingStatusItem
          statusName='対応'
          statusColor='purple'
          statusId='1'
        />
        <SettingStatusItem
          statusName='対応'
          statusColor='orange'
          statusId='1'
        />
        <SettingStatusItem statusName='対応' statusColor='pink' statusId='1' />
        <SettingStatusItem statusName='対応' statusColor='gray' statusId='1' />
        <SettingStatusItem
          statusName='対応'
          statusColor='lightGray'
          statusId='1'
        />
      </div>
    </Card>
  );
};
