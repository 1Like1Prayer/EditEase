import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
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
          { title: 'None', value: TranscriptionStyle.NONE },
          { title: 'Closed Caption', value: TranscriptionStyle.CLOSED },
          { title: 'Big Title', value: TranscriptionStyle.BIG },
          { title: 'Word by Word', value: TranscriptionStyle.SINGLE },
        ]}
      />
    </div>
  );
};
