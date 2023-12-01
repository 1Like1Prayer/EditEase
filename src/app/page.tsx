import React from 'react';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { SubtitleStyleCard } from '@/app/components/SubtitleStyleCard/SubtitleStyleCard';
import { VoiceOverCard } from '@/app/components/VoiceOverCard/VoiceOverCard';
import { LanguageCard } from '@/app/components/LanguageCard/LanguageCard';
import { BackgroundMusicCard } from '@/app/components/BackgroundMusicCard/BackgroundMusicCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import {VideoUploaderCard} from "@/app/components/VideoUploader/VideoUploaderCard";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-around space-y-10 py-12'>
      <HeaderComponent companyName={'Edit Ease'} />
      <div className='grid w-4/5 grid-cols-2 gap-2'>
        <div>
          <VideoUploaderCard />
        </div>
        <div>
          <VideoUploaderCard />
        </div>
        <div className='col-span-2'>
          <TranscriptCard />
        </div>
        <div>
          <SubtitleStyleCard />
        </div>
        <div>
          <VoiceOverCard />
        </div>
        <div className='col-span-2'>
          <LanguageCard />
        </div>
        <div className=''>
          <BackgroundMusicCard />
        </div>
      </div>
      <GenerateButton />
    </main>
  );
}
