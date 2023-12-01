import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const TranscriptCard = () => {
  return (
    <div className='card space-y-2'>
      <div className='text-black text-center'>Transcription</div>
      <ButtonGroupSelector
        elementProps={[
          { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
          { title: 'My Transcription', suffixIcon: <PersonIcon /> },
        ]}
      />
    </div>
  );
};
