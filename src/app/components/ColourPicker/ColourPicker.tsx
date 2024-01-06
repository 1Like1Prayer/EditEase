'use client';
import { useRef, useState } from 'react';

export const ColourPicker = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [colour, setColour] = useState<string>('#eb0000');
  const openColourDialog = () => ref?.current?.click();

  return (
    <div className={`button relative`} onClick={openColourDialog}>
      <input
        ref={ref}
        type='color'
        className='relative'
        onChange={(event) => setColour(event.target.value || '')}
      />
      {/*<div className={`rounded-3xl p-20 bg-[${colour}]`}></div>?*/}
    </div>
  );
};
