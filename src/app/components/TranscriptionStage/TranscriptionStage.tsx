import { SubtitleStyleCard } from '@/app/components/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/VoiceOverCard/VoiceOverCard';
import { LanguageCard } from '@/app/components/LanguageCard/LanguageCard';
import { BackgroundMusicCard } from '@/app/components/BackgroundMusicCard/BackgroundMusicCard';
import React, { useState } from 'react';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import { EditSubscriptionDialog } from '@/app/components/EditSubscriptionDialog/EditSubscriptionDialog';

export const TranscriptionStage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='absolute flex w-full flex-col items-center gap-10 '>
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
      <div className='flex flex-row justify-between gap-4'>
        <GenerateButton buttonText={'Previous Stage'} isNextStep={true} />
        <div onClick={() => setIsOpen(true)}>
          <GenerateButton buttonText={'Generate Video'} isNextStep={false} />
        </div>
      </div>
      <EditSubscriptionDialog isOpen={isOpen} />
    </div>
  );
};
