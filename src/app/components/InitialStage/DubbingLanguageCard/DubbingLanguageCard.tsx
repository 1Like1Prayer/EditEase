'use client';

import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
import React, { useState } from 'react';
import { useBoundStore } from '@/app/state/state';
import { Languages } from '@/app/state/transcription-state';

export const DubbingLanguageCard = () => {
  const [isFullList, setFullList] = useState<boolean>(false);
  const setDubbingLanguage = useBoundStore(
    (state) => state.changeTranscriptionSettings,
  );
  const changeLanguage = (value: Languages) =>
    setDubbingLanguage('dubLanguage', value);
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
        setState={changeLanguage}
        elementProps={[
          { title: 'ISR', value: Languages.HEBREW },
          { title: 'USA', value: Languages.ENGLISH },
          { title: 'RUS', value: Languages.RUSSIAN },
          { title: 'ARB', value: Languages.ARABIC },
        ]}
      />
    </div>
  );
};
