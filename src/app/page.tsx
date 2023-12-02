import React from 'react';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { SubtitleStyleCard } from '@/app/components/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/VoiceOverCard/VoiceOverCard';
import { LanguageCard } from '@/app/components/LanguageCard/LanguageCard';
import { BackgroundMusicCard } from '@/app/components/BackgroundMusicCard/BackgroundMusicCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import {VideoUploaderCard} from "@/app/components/VideoUploader/VideoUploaderCard";
import {EditSubscriptionDialog} from "@/app/components/EditSubscriptionDialog/EditSubscriptionDialog";

export default function Home() {
  return (
    <main className=' flex min-h-screen flex-col items-center gap-10 py-12'>
      <HeaderComponent companyName={'Edit Ease'} />
      <div className='grid w-4/5 grid-cols-2 gap-4'>
        <div>
          <EditSubscriptionDialog isOpen={true}/>
        </div>
        <div className='col-span-2'>
          <VideoUploaderCard title={'Select / Upload Your Main Videos'}/>
        </div>
        <div className='col-span-2'>
          <VideoUploaderCard title={'Select / Upload Your B-roll`s Clips'}/>
        </div>
        <div className='col-span-2'>
          <TranscriptCard />
        </div>
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
    </main>
  );
}
