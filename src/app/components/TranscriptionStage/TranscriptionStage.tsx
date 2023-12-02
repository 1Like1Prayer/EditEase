import { SubtitleStyleCard } from '@/app/components/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/VoiceOverCard/VoiceOverCard';
import { LanguageCard } from '@/app/components/LanguageCard/LanguageCard';
import { BackgroundMusicCard } from '@/app/components/BackgroundMusicCard/BackgroundMusicCard';
import React from 'react';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';

export const TranscriptionStage = () => {
  return (
    <div className='absolute w-full flex flex-col items-center gap-10 '>
      <div className='grid w-4/5 grid-cols-2 gap-4'>
        <SubtitleStyleCard />
        <VoiceOverCard />
        <div className='col-span-2'>
          <LanguageCard />
        </div>
        <div className='col-span-2'>
          <BackgroundMusicCard />
        </div>
      </div>
      <GenerateButton />
    </div>
  );
};
