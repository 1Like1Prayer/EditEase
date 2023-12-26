import React from 'react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';

export const TranscriptSelectionCard = () => (
  <div className='card space-y-2'>
    <div className='text-center text-black'>Transcription</div>
    <ButtonGroupSelector
      elementProps={[
        { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
        { title: 'My Transcription', suffixIcon: <PersonIcon /> },
      ]}
    />
  </div>
);
