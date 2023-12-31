import { SubtitleStyleCard } from '@/app/components/TranscriptionStage/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/TranscriptionStage/VoiceOverCard/VoiceOverCard';
import { LanguageCard } from '@/app/components/TranscriptionStage/LanguageCard/LanguageCard';
import { BackgroundMusicCard } from '@/app/components/TranscriptionStage/BackgroundMusicCard/BackgroundMusicCard';
import React, { useState } from 'react';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import { TranscriptionCard } from '@/app/components/TranscriptionStage/TranscriptionCard/TranscriptionCard';

export const TranscriptionStage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='absolute flex w-full flex-col items-center gap-10 '>
      <div className='grid w-4/5 grid-cols-2 gap-4'>
        {/*//todo: add this components when it'll be relevant (right now original transcription is not implements)*/}
        {/*<div className='col-span-2'>*/}
        {/*  <TranscriptSelectionCard />*/}
        {/*</div>*/}
        <div className='col-span-2'>
          <TranscriptionCard />
        </div>
        <SubtitleStyleCard />
        <VoiceOverCard />
        <div className='col-span-2'>
          <LanguageCard />
        </div>
      </div>
      <div className='flex flex-row justify-between gap-4'>
        <GenerateButton buttonText={'Previous Stage'} isNextStep={true} />
        <div onClick={() => setIsOpen(true)}>
          <GenerateButton buttonText={'Generate Video'} isNextStep={false} />
        </div>
      </div>
      {/*  todo: the API does not support the dialog options currently, do not implement yet */}
      {/*<EditWordDialog isOpen={isOpen} />*/}
    </div>
  );
};
