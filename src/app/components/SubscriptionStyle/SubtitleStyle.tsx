import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';

export const SubtitleStyle = () => {
  return (
    <div className='w-1/3 space-y-2 rounded-md bg-[#7A26C1] pb-2 shadow-lg shadow-[#7A26C1]'>
      <div className='pt-1 text-center text-[##9A9A9A]'>Subtitle Style</div>
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
