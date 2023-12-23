import { FC } from 'react';

export type TStatusColors =
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'lightBlue'
  | 'lightGray'
  | 'gray';

const colors: Record<TStatusColors, { bg: string; text: string }> = {
  red: {
    bg: 'bg-red-100',
    text: 'text-red-950',
  },
  blue: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-950',
  },
  lightBlue: {
    bg: 'bg-sky-100',
    text: 'text-sky-950',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-950',
  },
  yellow: {
    bg: 'bg-amber-100',
    text: 'text-amber-950',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-950',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-950',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-950',
  },
  gray: {
    bg: 'bg-slate-200',
    text: 'text-slate-700',
  },
  lightGray: {
    bg: 'bg-slate-100',
    text: 'text-slate-950',
  },
};

type TStatusTagProps = {
  statusName: string;
  statusColor: TStatusColors;
};

export const StatusTag: FC<TStatusTagProps> = ({ statusName, statusColor }) => {
  return (
    <span
      className={`${colors[statusColor].text} pt-[1px] pb-0.5 px-2 text-sm rounded ${colors[statusColor].bg}`}
    >
      {statusName}
    </span>
  );
};
