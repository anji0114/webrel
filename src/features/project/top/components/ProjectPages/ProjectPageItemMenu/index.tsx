import { Bars3Icon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';

type TProjectPageItemMenuProps = {
  onDeleteModalOpen: () => void;
  onEditModalOpen: () => void;
};

export const ProjectPageItemMenu: FC<TProjectPageItemMenuProps> = ({
  onDeleteModalOpen,
  onEditModalOpen,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none w-5 h-5'>
        <Bars3Icon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-[101] w-[160px] py-2 bg-white border border-gray-300 rounded-lg shadow-lg'
          align='center'
          sideOffset={0}
        >
          <DropdownMenu.Item className='hover:outline-none'>
            <button
              className='px-5 py-2 text-sm w-full flex items-center gap-2 hover:bg-gray-200'
              onClick={onEditModalOpen}
            >
              <PencilIcon className='w-4 h-4' />
              編集する
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='hover:outline-none'>
            <button
              className='px-5 py-2 text-sm w-full flex items-center gap-2 text-danger hover:bg-gray-200'
              onClick={onDeleteModalOpen}
            >
              <TrashIcon className='w-4 h-4' />
              削除する
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
