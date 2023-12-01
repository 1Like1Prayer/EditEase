import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import React from 'react';
import { Select, SelectOptionType } from '@/app/components/Select/Select';

const VoiceOptions: SelectOptionType[] = [
  { title: 'Benjamin, Male' },
  { title: 'Jasmin, Female' },
  { title: 'Johnny, Male' },
  { title: 'Mia, Female' },
];

export const VoiceOverCard = () => {
  return (
    <div className='card space-y-2'>
      <div className='pt-1'>Voice Over</div>
      <ButtonGroupSelector elementProps={[{ title: 'Yes' }, { title: 'No' }]} />
      <div className='text-center'>Choose Voice</div>
      <Select options={VoiceOptions} />
    </div>
  );
};
