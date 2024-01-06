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
      <div className='text-center text-black '>Add Background Music</div>
      <Select options={MusicOptions} />
    </div>
  );
};
