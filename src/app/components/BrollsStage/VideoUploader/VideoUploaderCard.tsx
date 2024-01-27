'use client';

import { useState } from 'react';
import { FileUploaderButton } from '@/app/components/shared/FileUploaderButton/FileUploaderButton';

export const VideoUploaderCard = () => {
  const [file, setFile] = useState<File>();

  return (
    <div className={'card space-y-2 p-0'}>
      <div className='rounded-t-md bg-primary text-center text-black'>
        Select / Upload Your Main Videos
      </div>
      <div className={`flex flex-row justify-center gap-2 p-2`}>
        {file && (
          <div className={`flex snap-x flex-row gap-2 overflow-x-auto`}>
            <video
              autoPlay
              loop
              muted
              className={`relative h-full rounded-md object-cover sm:h-20 sm:w-20 `}
              src={(file && URL.createObjectURL(file)) || ''}
            />
          </div>
        )}
        <FileUploaderButton onFileLoaded={setFile} />
      </div>
    </div>
  );
};
