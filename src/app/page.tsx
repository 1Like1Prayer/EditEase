import React from 'react';
import { ButtonGroupSelector } from '@/app/components/ButtonGroupSelector/ButtonGroupSelector';
import { HeaderComponent } from '@/app/components/headerComponent/HeaderComponent';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center space-y-10 py-12'>
      <HeaderComponent companyName={'Edit Ease'} />
      <ButtonGroupSelector />
    </main>
  );
}
