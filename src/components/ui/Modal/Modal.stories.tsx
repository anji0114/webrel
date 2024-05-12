import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '.';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'ui/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color='dark'
        size='md'
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN
      </Button>
      <Modal
        {...args}
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
      >
        <div>モーダルの中身</div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});

export const HideFooter = Template.bind({});
HideFooter.args = {
  hideFooter: true,
};
