import { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta = {
  title: 'ui/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </>
    ),
    wrapClassName: 'w-[100px]',
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
