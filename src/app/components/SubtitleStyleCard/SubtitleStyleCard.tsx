import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const SubtitleStyleCard = () => {
  return (
    <div className='card space-y-2'>
      <div className='pt-1 text-black'>
        <div>Subtitle Style</div>
      </div>
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
