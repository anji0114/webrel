import { StoryObj } from '@storybook/react';
import { Container } from '.';

const meta = {
  title: 'ui/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className='bg-red-500 p-5'></div>,
    isCenter: false,
  },
};

export const Center: Story = {
  args: {
    children: <div className='bg-red-500 p-5'></div>,
    isCenter: true,
  },
};
