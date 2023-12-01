'use client';

import { PlusIcon } from '@/app/components/icons/PlusIcon';
import { ChangeEvent, useState } from 'react';

interface VideoUploader {
  boxClassName?: string;
  containerClassName?: string;
}

export const VideosUploader = ({
  boxClassName,
  containerClassName,
}: VideoUploader) => {
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
    <div className={`flex gap-2 ${containerClassName}`}>
      <div className={`flex gap-1 ${containerClassName}`}>
        {
          <div
            className={`max-w-[10%] cursor-pointer rounded-md shadow-md ${boxClassName}`}
          >
            <img src={files}></img>
          </div>
        }
      </div>
      <label
        htmlFor='upload'
        className={`cursor-pointer rounded-md bg-gray-300 p-4 shadow-md ${boxClassName}`}
      >
        <div className='flex flex-col items-center'>
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
  );
};
