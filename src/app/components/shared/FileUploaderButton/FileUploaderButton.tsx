import { PlusIcon } from '@/app/components/icons/PlusIcon';
import { ChangeEvent, useRef, useState } from 'react';

interface FileUploaderButtonProps {
  onFileLoaded: (file: File) => void;
}

export const FileUploaderButton = ({ onFileLoaded }: FileUploaderButtonProps) => {
  const buttonRef = useRef<HTMLInputElement>(null);

  const handleUploadImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (FileReader && fileList && fileList.length) {
      onFileLoaded(fileList[0]);
    }
  };

  return (
    <label
      onClick={buttonRef?.current?.click}
      className='button flex w-full flex-shrink-0 cursor-pointer items-center justify-center bg-gray-200 sm:h-20 sm:w-20'
    >
      <div>
        <PlusIcon />
      </div>
      <input
        type='file'
        ref={buttonRef}
        className={'hidden'}
        onChange={handleUploadImages}
      />
    </label>
  );
};
