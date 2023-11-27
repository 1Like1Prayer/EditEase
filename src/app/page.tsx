'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-flow-col gap-6'>
      <div className='col-span-2 flex flex-col items-stretch space-y-2'>
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
        <div className='bg-background card flex space-y-2 p-4'>
          <p className='card-title'>Dimension</p>
          <ButtonGroupSelector
            elementProps={[
              { title: 'Original Transcription', suffixIcon: <BracketsIcon /> },
              { title: 'My Transcription', suffixIcon: <PersonIcon /> },
              { title: 'My Transcription', suffixIcon: <PersonIcon /> },
            ]}
          />
        </div>
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
      </div>
      <div className={'flex-row-'}>
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
      </div>
    </div>
  );
}
