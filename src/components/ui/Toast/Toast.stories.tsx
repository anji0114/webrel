import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '.';
import { Button } from '@/components/ui/Button';
import { ToastProvider } from '@/states/Toast';

const meta = {
  title: 'ui/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

const Template: StoryFn<typeof Toast> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button
        color='dark'
        size='md'
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN
      </Button>
      <Toast {...args} open={open} setOpen={setOpen}>
        children
      </Toast>
    </ToastProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};
