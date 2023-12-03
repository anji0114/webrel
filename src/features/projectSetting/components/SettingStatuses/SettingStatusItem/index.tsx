import React, { FC } from 'react';

type TSettingStatusItemProps = {
  statusName: string;
};

export const SettingStatusItem: FC<TSettingStatusItemProps> = ({
  statusName,
}) => {
  return <div>{statusName}</div>;
};
