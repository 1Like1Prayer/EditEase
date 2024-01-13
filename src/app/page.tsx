'use client';
import React from 'react';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';
import { InitialStage } from '@/app/components/InitialStage/InitialStage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/core/queryClient/queryClient';

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='min-h-screen py-12'>
        <HeaderComponent companyName={'EditEase'} />
        <div className='grid grid-cols-2'>
          <InitialStage />
          <div className='flex justify-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=FwphtZAj-UDiEN2h'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
