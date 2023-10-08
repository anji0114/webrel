import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
  title: 'Element/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: <>テキスト</>,
  },
};

export const Medium: Story = {
  args: {
    children: <>テキスト</>,
    className: 'p-8 rounded-xl shadow-lg',
  },
};
