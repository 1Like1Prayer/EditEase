import { useBoundStore } from '@/app/state/state';
import React from 'react';


interface GenerateButtonInterface {
  buttonText: string;
  isNextStep: boolean;
}
export const GenerateButton = ({
  buttonText,
  isNextStep,
}: GenerateButtonInterface) => {
  const activateTransition = useBoundStore((state) => state.activateTransition);
  return (
    <div
      className='group relative inline-flex'
      onClick={() => (isNextStep ? activateTransition() : ' ')}
    >
      <div className='transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200'></div>
      <a
        className='relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none'
        role='button'
      >
        {buttonText}
      </a>
    </div>
  );
};
