import React from 'react';
import { LineSelector } from '@/app/components/TranscriptionStage/TranscriptionCard/LineSelector/LineSelector';
import { LineInput } from '@/app/components/TranscriptionStage/TranscriptionCard/LineInput/LineInput';

export const TranscriptionCard = () => (
  <div className='card grid grid-cols-5 space-y-5'>
    <div className='col-span-5 text-center text-black'>Transcript</div>
    <LineSelector />
    <LineInput />
  </div>
);
