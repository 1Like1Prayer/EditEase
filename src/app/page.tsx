import React from 'react';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center space-y-10 py-12'>
      <HeaderComponent companyName={'Edit Ease'} />
      <TranscriptCard />
    </main>
  );
}
