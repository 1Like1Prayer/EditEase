'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import {ButtonGroupSelector} from "@/app/components/ButtonGroupSelector/ButtonGroupSelector";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ButtonGroupSelector/>
    </main>
  );
}
