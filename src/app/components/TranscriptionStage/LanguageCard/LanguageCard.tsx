'use client';

import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import React, { useState } from 'react';

export const LanguageCard = () => {
  const [isFullList, setFullList] = useState<boolean>(false);

  return (
    <div className='card flex flex-row justify-between'>
      <div className='w-3/5 text-black'>
        <div>Select Languages For Auto-Generated VoiceOver And Subtitle</div>
        <u
          className='cursor-pointer text-sm text-gray-500'
          onClick={() => setFullList(!isFullList)}
        >
          View Full List
        </u>
      </div>
      <ButtonGroupSelector
        elementProps={[
          { title: 'ISR' },
          { title: 'USA' },
          { title: 'ITA' },
          { title: 'SPA' },
        ]}
      />
    </div>
  );
};
