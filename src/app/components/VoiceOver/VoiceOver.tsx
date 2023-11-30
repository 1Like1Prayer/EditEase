'use client'
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import React from 'react';
import { Select, SelectOptionType } from '@/app/components/Select/Select';

export const VoiceOver = () => {
  const VoiceOptions: SelectOptionType[] = [
    { title: 'Benjamin, Male' },
    { title: 'Jasmin, Female' },
    { title: 'Johnny, Male' },
    { title: 'Mia, Female' },
  ];

  return (
    <div className='w-1/3 space-y-2 rounded-md bg-[#7A26C1] pb-2 shadow-lg shadow-[#7A26C1]'>
      <div className='pt-1 text-center text-[##9A9A9A]'>Add VoiceOver</div>
      <ButtonGroupSelector elementProps={[{ title: 'Yes' }, { title: 'No' }]} />
      <div className='text-center text-[##9A9A9A]'>Choose Voice</div>
      <Select options={VoiceOptions} />
    </div>
  );
};
