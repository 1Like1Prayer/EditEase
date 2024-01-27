'use client';

import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
import React, { useState } from 'react';

import { useAppDispatch } from '@/app/state/redux/hooks';
import {changeTranscriptionSettings, Languages} from '@/app/state/redux/transcriptionSlice';

export const DubbingLanguageCard = () => {
  const [isFullList, setFullList] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const changeLanguage = (value: Languages) =>
    dispatch(changeTranscriptionSettings({ field: 'dubLanguage', value }));
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
