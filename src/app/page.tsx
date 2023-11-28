'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';
import {Select, SelectOptionType} from "@/app/components/Select/Select";

const VoiceOptions: SelectOptionType[] = [
  { title: 'Benjamin, Male' },
  { title: 'Jasmin, Female' },
  { title: 'Johnny, Male' },
  { title: 'Mia, Female' },
];

export default function Home() {
  return (
    <div className='grid min-h-screen grid-flow-col gap-6'>
      <div className='col-span-2 flex flex-col space-y-2'>
        <div className='bg-background card flex space-y-2 p-4'>
          <p className='card-title'>
            The way i want to create<b>Transcription</b>
          </p>
          <ButtonGroupSelector
            elementProps={[
              { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
              { title: 'My Transcription', suffixIcon: <PersonIcon /> },
            ]}
          />
        </div>
        <div className='grid grid-flow-col gap-6'>
          <div className='bg-background card flex space-y-2 p-4'>
            <p className='card-title'>Subtitle Style</p>
            <ButtonGroupSelector
              gridCols={2}
              elementProps={[
                { title: 'None', suffixIcon: <BracketsIcon /> },
                { title: 'Closed Caption', suffixIcon: <PersonIcon /> },
                { title: 'Big Title', suffixIcon: <PersonIcon /> },
                { title: 'Word By Word', suffixIcon: <PersonIcon /> },
              ]}
            />
          </div>
          <div className='bg-background card flex space-y-2 p-4'>
            <p className='card-title'>Add Voice</p>
            <ButtonGroupSelector
              elementProps={[{ title: 'Yes' }, { title: 'No' }]}
            />
              <p>Choose Voice</p>
              <Select options={VoiceOptions}/>
          </div>
        </div>
      </div>
      <div className={'flex-row-'}>
        <div className='bg-background card flex space-y-2 p-4'>
          <p className='card-title'>
            The way i want to create<b>Transcription</b>
          </p>
          <ButtonGroupSelector
            elementProps={[
              { title: 'None', suffixIcon: <BracketsIcon /> },
              { title: 'Closed Caption', suffixIcon: <PersonIcon /> },
              { title: 'Big Title', suffixIcon: <PersonIcon /> },
              { title: 'Word By Word', suffixIcon: <PersonIcon /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
