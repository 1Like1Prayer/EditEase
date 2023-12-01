import React from 'react';
import { Select, SelectOptionType } from '@/app/components/Select/Select';

const MusicOptions: SelectOptionType[] = [
  { title: 'Benjamin, Male' },
  { title: 'Jasmin, Female' },
  { title: 'Johnny, Male' },
  { title: 'Mia, Female' },
];

export const BackgroundMusicCard = () => {
  return (
    <div className='card space-y-2'>
      <div className='pt-1 text-black'>Subtitle Style</div>
      <Select options={MusicOptions} />
    </div>
  );
};
