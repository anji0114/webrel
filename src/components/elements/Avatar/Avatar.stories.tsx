import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: '/images/dummy/image1.png',
    alt: 'ダミー画像',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'w-14 h-14',
    sizeNumber: 64,
  },
};
