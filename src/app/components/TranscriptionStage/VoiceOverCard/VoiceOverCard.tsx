import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import React from 'react';
import { SelectOptionType } from '@/app/components/Select/Select';
import { BackgroundMusicCard } from '@/app/components/TranscriptionStage/BackgroundMusicCard/BackgroundMusicCard';
import { useBoundStore } from '@/app/state/state';

const VoiceOptions: SelectOptionType[] = [
  { title: 'Benjamin, Male' },
  { title: 'Jasmin, Female' },
  { title: 'Johnny, Male' },
  { title: 'Mia, Female' },
];

export const VoiceOverCard = () => {
  const setVoiceOver = useBoundStore((state) => state.changeAllLineSettings);
  //todo: add implementation of changing state in ButtonGroupSelector
  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Voice Over</div>
      <ButtonGroupSelector elementProps={[{ title: 'Yes' }, { title: 'No' }]}/>
      <BackgroundMusicCard />
    </div>
  );
};
