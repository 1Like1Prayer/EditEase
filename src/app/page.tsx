'use client';

import React from 'react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { BracketsIcon } from '@/app/icons/BracketsIcon';
import { PersonIcon } from '@/app/icons/PersonIcon';
import {VideosUploader} from "@/app/components/VideosUploader/VideosUploader";

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
      <div className='card flex space-y-2 bg-primary p-4'>
        <VideosUploader/>
      </div>
    </main>
  );
}
