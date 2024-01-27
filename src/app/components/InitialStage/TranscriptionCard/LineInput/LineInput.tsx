import React from 'react';
import { useForm } from 'react-hook-form';
import { addLine } from '@/app/state/redux/transcriptionSlice';
import { useAppDispatch } from '@/app/state/redux/hooks';

type FormData = {
  line: string;
};

export const LineInput = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { line: '' },
  });

  const onSubmit = (data: FormData) => dispatch(addLine(data.line));

  return (
    <form className='col-span-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='h-6 text-red-500'>
        {errors.line && 'This field is required'}
      </div>
      <div className='flex w-5/6 rounded-md bg-white pl-2 '>
        <textarea
          className='w-full bg-white focus:outline-0'
          {...register('line', { required: true })}
          placeholder='Enter a New Subtitle Here'
        />
        <button type='submit' className='px-4 font-bold'>
          Add
        </button>
      </div>
    </form>
  );
};
