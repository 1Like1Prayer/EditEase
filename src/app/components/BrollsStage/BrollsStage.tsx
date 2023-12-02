import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import React from 'react';

export const BrollsStage = () => {
  return (
    <div className='absolute w-full flex flex-col items-center gap-10'>
      <div className=' w-4/5'>
        <TranscriptCard />
      </div>
      <GenerateButton />
    </div>
  );
};
