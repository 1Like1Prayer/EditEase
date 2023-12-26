import React from 'react';
import { useForm } from 'react-hook-form';
import { useBoundStore } from '@/app/state/state';

type FormData = {
  line: string;
};

export const LineInput = () => {
  const addLine = useBoundStore((state) => state.addLine);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { line: '' },
  });
  const onSubmit = (data: FormData) => {
    console.log(data.line);
  };

  return (
    <form className='col-span-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='h-6 text-red-500'>
        {errors.line && 'This field is required'}
      </div>
      <div className='flex w-5/6 justify-between rounded-md bg-white p-2'>
        <textarea
          className='bg-white'
          {...register('line', { required: true })}
          placeholder='Enter a New Subtitle Here'
        />
        <button type='submit' className='pr-4'>
          Add
        </button>
      </div>
    </form>
  );
};
