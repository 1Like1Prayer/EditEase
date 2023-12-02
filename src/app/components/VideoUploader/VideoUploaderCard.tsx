'use client';

import { PlusIcon } from '@/app/components/icons/PlusIcon';
import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import { PlayIcon } from '@/app/components/icons/PlayIcon';

interface VideoUploaderCardProps {
  title: string;
}

export const VideoUploaderCard = ({ title }: VideoUploaderCardProps) => {
  const [imagesSet, setImagesSet] = useState<File[]>([]);
  const [imagesOrder, setImagesOrder] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadImages = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (FileReader && fileList && fileList.length) {
      const imageSelection: File[] = Array.from(fileList);

      setImagesSet((prev) => prev.concat(imageSelection));
    }
  };

  // TODO: try to get this function more efficient (maybe use map with the object as a key and index as value)
  const isImageSelected = (img: File): boolean => {
    return imagesOrder.findIndex((image) => image === img) !== -1;
  };

  const selectImage = (selectedImage: File) => {
    setImagesOrder((prev) => prev.concat(selectedImage));
  };

  const unselectImage = (selectedImage: File) => {
    setImagesOrder((prev) => prev.filter((image) => image !== selectedImage));
  };

  return (
    <div className={'card space-y-2'}>
      <div className='text-center text-black'>{title}</div>
      <div className={`flex flex-row justify-between gap-2 p-2`}>
        <div className={`flex snap-x flex-row gap-2 overflow-x-auto`}>
          {Array.from(imagesSet.values()).map((file, index) => (
            <div
              key={index}
              className={
                'relative flex-shrink-0 cursor-pointer snap-start sm:h-20 sm:w-20'
              }
              onClick={() =>
                isImageSelected(file) ? unselectImage(file) : selectImage(file)
              }
            >
              {file.type.includes('image') ? (
                <Image
                  alt={'image'}
                  className={`h-full rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-20 ${
                    isImageSelected(file) ? 'opacity-30' : ''
                  }`}
                  width={0}
                  height={0}
                  src={(file && URL.createObjectURL(file)) || ''}
                />
              ) : (
                <>
                  <video
                    autoPlay
                    loop
                    className={`relative h-full rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-20 ${
                      isImageSelected(file) ? 'opacity-30' : ''
                    }`}
                    src={(file && URL.createObjectURL(file)) || ''}
                  />
                  <div className='absolute top-0'>
                    <PlayIcon />
                  </div>
                </>
              )}
              {isImageSelected(file) ? (
                <div className='absolute left-1/2 top-1/2 text-center text-amber-500'>
                  {imagesOrder.findIndex((image) => image == file) + 1}
                </div>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
        <label
          onClick={inputRef?.current?.click}
          className='button flex w-full flex-shrink-0 cursor-pointer items-center justify-center bg-gray-200 transition hover:bg-gray-300 sm:h-20 sm:w-20'
        >
          <div>
            <PlusIcon />
          </div>
          <input
            type='file'
            ref={inputRef}
            className={'hidden'}
            onChange={handleUploadImages}
            multiple
          />
        </label>
      </div>
    </div>
  );
};
