import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
import React from 'react';

import { useAppDispatch } from '@/app/state/redux/hooks';
import {changeTranscriptionSettings, TranscriptionStyle} from '@/app/state/redux/transcriptionSlice';

export const SubtitleStyleCard = () => {
  const dispatch = useAppDispatch();

  const changeSubtitleStyle = (value: TranscriptionStyle) =>
    dispatch(changeTranscriptionSettings({ field: 'style', value }));

  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Subtitle Style</div>
      <ButtonGroupSelector
        setState={changeSubtitleStyle}
        elementProps={[
          { title: 'None', value: TranscriptionStyle.NONE },
          { title: 'Closed Caption', value: TranscriptionStyle.CLOSED },
          { title: 'Big Title', value: TranscriptionStyle.BIG },
          { title: 'Word by Word', value: TranscriptionStyle.SINGLE },
        ]}
      />
    </div>
  );
};
