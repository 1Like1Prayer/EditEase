import React, { useEffect } from 'react';
import { WordSelector } from '@/app/components/WordSelector/WordSelector';
import { useBoundStore } from '@/app/state/state';

interface TranscriptionCardInterface {
  transcriptions: string[];
}
export const TranscriptionCard = ({
  transcriptions,
}: TranscriptionCardInterface) => {
  const addLines = useBoundStore((state) => state.addLines);
  const lines = useBoundStore((state) => state.transcription.lines);

  //add mock string to transcription
  useEffect(() => {
    addLines('hello world this is a test');
    console.log('inside');
  }, []);
  return (
    <div className='card space-y-2'>
      <div className='text-center text-black'>Transcript</div>
      <div>
        {lines.map((line, index) => (
          <WordSelector key={index} words={line} />
        ))}
      </div>
    </div>
  );
};
