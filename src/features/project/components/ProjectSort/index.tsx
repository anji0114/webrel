import { Input } from '@/components/elements/Input';
import { Select } from '@/components/elements/Select';

export const ProjectSort = () => {
  return (
    <div className='flex gap-8'>
      <div className='w-[260px]'>
        <Select size='sm' className='w-full bg-white'>
          <option value=''>https://gathernote.vercel.com/</option>
          <option value=''>https://localhost:8000/</option>
          <option value=''>https://localhost:3000/</option>
        </Select>
      </div>

      <div className='w-[260px]'>
        <Input size='sm' className='w-full bg-white' />
      </div>
    </div>
  );
};
