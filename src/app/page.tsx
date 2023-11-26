'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/components/icons/BracketsIcon';
import { PersonIcon } from '@/app/components/icons/PersonIcon';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='card flex space-y-2 bg-primary p-4'>
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
    </main>
  );
}
