'use client';

import { useVideoStore } from '@/app/state/videos-state';
import { BrollEdit } from '@/app/components/BrollsEditCard/BrollEdit/BrollEdit';

export const BrollsEditCard = () => {
  const { brollVideos } = useVideoStore();

  return (
    <div className='card gap-2'>
      <div>Choose Brolls Times:</div>
      <div className='grid grid-cols-5 gap-2'>
        {Array.from(brollVideos.values()).map((broll) => (
          <BrollEdit broll={broll} />
        ))}
      </div>
    </div>
  );
};
