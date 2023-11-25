'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
export default function Home() {
  const plans = [
    {
      name: 'Original Transcription',
    },
    { name: 'My Transcription' },
  ];

  const [selected, setSelected] = useState(plans[0]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>temp</div>
    </main>
  );
}
