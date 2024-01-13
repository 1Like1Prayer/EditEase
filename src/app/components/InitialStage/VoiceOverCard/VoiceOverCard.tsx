import { ButtonGroupSelector } from '@/app/components/shared/ButtonGroupSelector/ButtonGroupSelector';
import React from 'react';
import { SelectOptionType } from '@/app/components/shared/Select/Select';
import { BackgroundMusicCard } from '@/app/components/InitialStage/BackgroundMusicCard/BackgroundMusicCard';
import { useBoundStore } from '@/app/state/state';
import { Line } from '@/app/state/transcription-state';

const VoiceOptions: SelectOptionType[] = [
  { title: 'Benjamin, Male' },
  { title: 'Jasmin, Female' },
  { title: 'Johnny, Male' },
  { title: 'Mia, Female' },
];

export const VoiceOverCard = () => {
  const setVoiceOver = useBoundStore((state) => state.changeAllLineSettings);
  //todo: think about seperating dubbing voice and is dubbed in order to change the state more easily
  const lineDubbing = useBoundStore(
    (state) => (state.transcription.lines.get(0) as Line)?.config.dubbing,
  );
  const changingVoice = (value: boolean) =>
    setVoiceOver('dubbing', { ...lineDubbing, isDubbed: value });

  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Voice Over</div>
      <ButtonGroupSelector
          setState={changingVoice}
        elementProps={[
          { title: 'Yes', value: true },
          { title: 'No', value: false },
        ]}
      />
      <BackgroundMusicCard />
    </div>
  );
};
