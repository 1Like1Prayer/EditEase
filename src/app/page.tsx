'use client';
import React from 'react';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';
import { Transition } from '@headlessui/react';
import { BrollsStage } from '@/app/components/BrollsStage/BrollsStage';
import { useBoundStore } from '@/app/state/transition-state';
import { TranscriptionStage } from '@/app/components/TranscriptionStage/TranscriptionStage';

export default function Home() {
  const isShowing: boolean = useBoundStore((state) => state.isShowing);
  return (
    <main className='min-h-screen py-12'>
      <HeaderComponent companyName={'EditEase'} />
      <div className='grid grid-cols-2 gap-4'>
        <div className='relative'>
          <Transition
            show={isShowing}
            enter='transition delay-500 duration-200 '
            enterFrom='-translate-x-full'
            enterTo=' translate-x-0'
            leave='transition duration-500'
            leaveFrom=' translate-x-0'
            leaveTo='-translate-x-full'
          >
            <BrollsStage />
          </Transition>
          <Transition
            show={!isShowing}
            enter='transition delay-500 duration-200'
            enterFrom=' -translate-x-full'
            enterTo=' translate-x-0'
            leave='transition duration-500'
            leaveFrom=' translate-x-0'
            leaveTo=' -translate-x-full'
          >
            <TranscriptionStage />
          </Transition>
        </div>
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
  );
}
