'use client';

import { BrollVideoType, useVideoStore } from '@/app/state/videos-state';
import {
  Ban,
  Book,
  Drama,
  Droplets,
  Expand,
  Eye,
  EyeOff,
  Flame,
  Shrink,
  Trash2,
} from 'lucide-react';
import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
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
        <div className='tooltip' data-tip='edit b-roll'>
          <video
            tabIndex={0}
            className={`cursor-pointer rounded-md object-cover transition duration-300 hover:opacity-30 sm:h-20 sm:w-fit `}
            src={link}
          />
        </div>
      </div>
      <div
        className='card dropdown-content absolute z-10 mt-1 w-max gap-2 bg-white shadow-md'
        tabIndex={0}
      >
        <div className=''>
          <div>Video Type</div>
          <ButtonGroupSelector
            elementProps={[
              { title: 'B-roll' },
              { title: 'Original' },
              { title: 'LipSync' },
            ]}
          />
        </div>
        <div className='flex justify-between'>
          <div>Keep Eye Contact</div>
          <ButtonGroupSelector
            elementProps={[
              { title: 'Yes', suffixIcon: <Eye /> },
              { title: 'No', suffixIcon: <EyeOff /> },
            ]}
          />
        </div>
        <div className='flex flex-col'>
          <div>The Video</div>
          <div className='flex flex-col bg-gray-200'>
            <video
              className={`m-1 self-center rounded-md object-cover sm:h-20 sm:w-fit`}
              src={link}
            />
          </div>
        </div>
        <div className=''>
          <div>Entrance Animation</div>
          <div className='grid grid-cols-4 items-center gap-2'>
            <button className='button w-fit'>
              <Ban />
            </button>
            <button className='button w-fit'>
              <Flame />
            </button>
            <button className='button w-fit'>
              <Shrink />
            </button>
            <button className='button w-fit'>
              <Expand />
            </button>
            <button className='button w-fit'>
              <Shrink />
            </button>
            <button className='button w-fit'>
              <Book />
            </button>
            <button className='button w-fit'>
              <Drama />
            </button>
            <button className='button w-fit'>
              <Droplets />
            </button>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-between'>
          <div className='flex gap-2'>
            <button className='button bordered border-primary'>Cancel</button>
            <button className='button bg-primary'>Apply</button>
          </div>
          <div className='tooltip' data-tip='delete b-roll'>
            <button className='button bg-red-400'>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
