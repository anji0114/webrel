import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';

const meta = {
  title: 'Element/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'ここにchildrenが入ります',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};
