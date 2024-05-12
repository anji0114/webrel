import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Wide: Story = {
  args: {
    className: 'w-full',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
