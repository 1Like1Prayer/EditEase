import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const SubtitleStyleCard = () => {
  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Subtitle Style</div>
      <ButtonGroupSelector
        elementProps={[
          { title: 'None' },
          { title: 'Closed Caption' },
          { title: 'Big Title' },
          { title: 'Word by Word' },
        ]}
      />
    </div>
  );
};
