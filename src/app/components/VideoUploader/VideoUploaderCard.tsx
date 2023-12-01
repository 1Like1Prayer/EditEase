'use client';

import { PlusIcon } from '@/app/components/icons/PlusIcon';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

export const VideoUploaderCard = () => {
  const [files, setFiles] = useState<string>();
  const handleUploadImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (FileReader && fileList && fileList.length) {
      const fr = new FileReader();
      fr.onload = function () {
        setFiles(fr.result as string);
      };
      fr.readAsDataURL(fileList[0]);
    }
  };

  return (
    <div className={`card flex flex-row justify-between p-2 gap-2`}>
      <div className={`flex flex-row p-2 gap-2 overflow-x-auto`}>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
        <div className={'bg-blue-300 p-5'}></div>
      </div>
      <div className='button bg-gray-200 p-6 transition hover:bg-gray-300'>
        <label htmlFor='upload'>
          <div className='flex cursor-pointer flex-col items-center'>
            <PlusIcon />
          </div>
        </label>
        <input
          id='upload'
          type='file'
          className={'hidden'}
          onChange={handleUploadImages}
        />
      </div>
    </div>
  );
};
