import { TrashIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text',
    },
  },
  args: {
    children: 'Button',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'dark',
  },
};

export const Icon: Story = {
  args: {
    color: 'red',
    href: '/',
    icon: <TrashIcon />,
  },
};

export const Disabled: Story = {
  args: {
    color: 'blue',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    color: 'dark',
    size: 'md',
    isLoading: true,
  },
};
