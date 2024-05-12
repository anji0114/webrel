import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '.';

const meta = {
  title: 'ui/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Wide: Story = {
  args: {
    className: 'w-full',
    minRows: 6,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
