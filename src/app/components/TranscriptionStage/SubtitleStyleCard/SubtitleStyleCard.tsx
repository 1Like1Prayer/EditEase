import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import React from 'react';
import { useBoundStore } from '@/app/state/state';
import { TranscriptionStyle } from '@/app/state/transcription-state';

export const SubtitleStyleCard = () => {
  const setSubtitleStyle = useBoundStore(
    (state) => state.changeTranscriptionSettings,
  );
  const changeSubtitleStyle = (value: TranscriptionStyle) =>
    setSubtitleStyle('style', value);
  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Subtitle Style</div>
      <ButtonGroupSelector
        setState={changeSubtitleStyle}
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
