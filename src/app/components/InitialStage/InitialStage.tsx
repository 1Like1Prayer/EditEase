import { SubtitleStyleCard } from '@/app/components/InitialStage/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/InitialStage/VoiceOverCard/VoiceOverCard';
import { DubbingLanguageCard } from '@/app/components/InitialStage/DubbingLanguageCard/DubbingLanguageCard';
import React from 'react';
import { GenerateButton } from '@/app/components/shared/GenerateButton/GenerateButton';
import { TranscriptionCard } from '@/app/components/InitialStage/TranscriptionCard/TranscriptionCard';
import { SubtitleLanguageCard } from '@/app/components/InitialStage/SubtitleLanguageCard/SubtitleLanguageCard';
import { VideoUploaderCard } from '@/app/components/BrollsStage/VideoUploader/VideoUploaderCard';

export const InitialStage = () => {
  return (
    <div className='flex w-full flex-col items-center gap-10 '>
      <div className='grid w-4/5 grid-cols-2 gap-4'>
        {/*//todo: add this components when it'll be relevant (right now original transcription is not implements)*/}
        {/*<div className='col-span-2'>*/}
        {/*  <TranscriptSelectionCard />*/}
        {/*</div>*/}
        <div className='col-span-2'>
          <VideoUploaderCard />
        </div>
        <div className='col-span-2'>
          <SubtitleLanguageCard />
        </div>
        <div className='col-span-2'>
          <TranscriptionCard />
        </div>
        <SubtitleStyleCard />
        <VoiceOverCard />
        <div className='col-span-2'>
          <DubbingLanguageCard />
        </div>
      </div>
      <div>
        <GenerateButton buttonText={'Generate Video'} />
      </div>
      {/*  todo: the API does not support the dialog options currently, do not implement yet */}
      {/*<EditWordDialog isOpen={isOpen} />*/}
    </div>
  );
};
