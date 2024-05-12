import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://source.unsplash.com/random',
    alt: 'ダミー画像',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 64,
  },
};
