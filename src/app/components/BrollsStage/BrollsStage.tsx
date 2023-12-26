import { TranscriptSelectionCard } from '@/app/components/TranscriptionStage/TranscriptSelectionCard/TranscriptSelectionCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import React from 'react';
import { VideoUploaderCard } from '@/app/components/BrollsStage/VideoUploader/VideoUploaderCard';

export const BrollsStage = () => (
  <div className='absolute flex w-full flex-col items-center gap-10'>
    <div className='w-4/5 space-y-4'>
      <VideoUploaderCard title={'Select / Upload Your Main Videos'} />
      <VideoUploaderCard title={'Select / Upload Your B-roll`s Clips'} />
    </div>
    <GenerateButton buttonText={'Merge Videos'} isNextStep={true} />
  </div>
);
