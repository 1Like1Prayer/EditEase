'use client';

import { BrollVideoType, useVideoStore } from '@/app/state/videos-state';
import { useState } from 'react';

export const BrollsEditCard = () => {
  const { brollVideos, removeBrollVideos } = useVideoStore();
  const [editedBroll, setEditedBroll] = useState<BrollVideoType['pexelId']>();

  return (
    <div className='card '>
      <div>Choose Brolls Times:</div>
      <div className='grid grid-cols-5 gap-2'>
        {Array.from(brollVideos.values()).map(({ pexelId, link, qualityId }) => (
          <div key={pexelId} className='indicator cursor-pointer'>
            <span
              className='badge indicator-item badge-secondary '
              onClick={() => removeBrollVideos(pexelId)}
            >
              -
            </span>
            <video
              className={` relative rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:h-20 sm:w-fit`}
              src={link}
              onClick={() => setEditedBroll(pexelId)}
            />
          </div>
        ))}
      </div>
      {editedBroll && (
        <div className='card bg-white'>
          <div>
            Start Time:
            <input />
          </div>
          <div>
            End Time:
            <input />
          </div>
        </div>
      )}
    </div>
  );
};
