'use client';

import { BrollVideoType, useVideoStore } from '@/app/state/videos-state';
import { Trash2 } from 'lucide-react';
const convertTimeToNumber = (time: string): number => {
  const [minute, second] = time.split(/:/);
  return Number(minute) * 60 + Number(second);
};

interface BrollEditProps {
  broll: BrollVideoType;
}

export const BrollEdit = ({ broll }: BrollEditProps) => {
  const { addBrollVideos, removeBrollVideos } = useVideoStore();
  const { pexelId, link, qualityId, endTime, startTime } = broll;

  const saveBrollStartTime = (startTime: string) => {
    addBrollVideos({
      ...broll,
      startTime: convertTimeToNumber(startTime),
    });
  };

  const saveBrollEndTime = (endTime: string) => {
    addBrollVideos({
      ...broll,
      endTime: convertTimeToNumber(endTime),
    });
  };

  return (
    <div className='dropdown dropdown-bottom'>
      <div className='relative'>
        <video
          tabIndex={0}
          className={`cursor-pointer rounded-md object-cover transition duration-300 hover:opacity-30 sm:h-20 sm:w-fit `}
          src={link}
        />
        {!(startTime && endTime) && (
          <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500'></span>
          </span>
        )}
      </div>
      <div
        tabIndex={0}
        className='card dropdown-content absolute top-full z-20 mt-1 gap-2 shadow-md border-2 border-sky-400 w-max'
      >
        <div className='flex items-center justify-between gap-2'>
          <div>Start Time:</div>
          <input
            className='input input-ghost focus:input-primary'
            type='time'
            onBlur={(e) => saveBrollStartTime(e.currentTarget.value)}
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <div>End Time:</div>
          <input
            className='input input-ghost focus:input-primary'
            type='time'
            onBlur={(e) => saveBrollEndTime(e.currentTarget.value)}
          />
        </div>
        <div className='tooltip' data-tip='delete Broll'>
          <button className='button flex w-full justify-center bg-gray-400'>
            <Trash2 onClick={() => removeBrollVideos(pexelId)} />
          </button>
        </div>
      </div>
    </div>
  );
};
