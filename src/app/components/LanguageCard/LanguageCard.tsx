'use client';

import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import React, { useState } from 'react';

export const LanguageCard = () => {
  const [isFullList, setFullList] = useState<boolean>(false);

  return (
    <div className='card flex flex-row justify-between space-x-2 pt-1'>
      <div className='w-1/5 text-black'>
        <div>Select Languages For auto-generated VoiceOver and subtitle.</div>
        <u
          className='cursor-pointer text-sm text-gray-500'
          onClick={() => setFullList(!isFullList)}
        >
          View Full List
        </u>
      </div>
      <ButtonGroupSelector
        elementProps={[
          { title: 'Hebrew' },
          { title: 'English' },
          { title: 'Italian' },
          { title: 'Spanish' },
        ]}
      />
    </div>
  );
};
