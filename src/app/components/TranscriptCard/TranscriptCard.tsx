import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const TranscriptCard = () => {
  return (
    <div className='card w-9/12 bg-[#7A26C1] text-neutral-content sm:w-1/4 '>
      <div className='card-body'>
        <p className='card-title'>Transcription</p>
        <ButtonGroupSelector
          elementProps={[
            { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
            { title: 'My Transcription', suffixIcon: <PersonIcon /> },
          ]}
        />
      </div>
    </div>
  );
};
