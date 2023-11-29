import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const TranscriptCard = () => {
  return (
    <div className='w-9/12 rounded-md bg-[#7A26C1] shadow-lg shadow-[#7A26C1] sm:w-1/4 space-y-4'>
      <div className='pt-2 text-center text-[##9A9A9A]'>Transcription</div>
      <ButtonGroupSelector
        elementProps={[
          { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
          { title: 'My Transcription', suffixIcon: <PersonIcon /> },
        ]}
      />
    </div>
  );
};