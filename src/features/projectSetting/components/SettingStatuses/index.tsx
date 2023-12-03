import { Bars3Icon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Button, Card } from '@/components/elements';

export const SettingStatuses = () => {
  return (
    <Card>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl leading-tight font-bold'>ステータス編集</h2>
        <Button size='sm' color='gray'>
          追加する
        </Button>
      </div>
      <div className='mt-6'>
        <div className='border-y border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-red-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-red-100'>
            未対応
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-indigo-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-indigo-100'>
            処理中
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-green-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-green-100'>
            処理済み
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-amber-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-amber-100'>
            完了
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-purple-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-purple-100'>
            保留
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-orange-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-orange-100'>
            確定
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-pink-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-pink-100'>
            次着手
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-sky-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-sky-100'>
            検討中
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-slate-950 pt-[1px] pb-0.5 px-2 text-sm rounded bg-slate-100'>
            未定
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
        <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
          <button className='w-5 text-gray-700 cursor-grab'>
            <Bars3Icon />
          </button>
          <span className='text-slate-700 pt-[1px] pb-0.5 px-2 text-sm rounded bg-slate-200'>
            未予定
          </span>
          <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
            <EllipsisHorizontalIcon className='w-5 h-5' />
          </button>
        </div>
      </div>
    </Card>
  );
};
