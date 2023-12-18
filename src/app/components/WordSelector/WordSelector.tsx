import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { line } from '@/app/state/transcription-state';

interface WordSelectorInterface {
  words: line;
}
export const WordSelector = ({ words }: WordSelectorInterface) => {
  const [selectedWord, setSelectedWord] = useState<string>('');

  return (
    <RadioGroup value={selectedWord} onChange={setSelectedWord}>
      <RadioGroup.Label className='text-sm text-gray-500'>
        Click On Any Word Below To Edit :)
      </RadioGroup.Label>
      <div className='flex flex-row gap-3'>
        {words.map((word, index) => (
          <RadioGroup.Option value={word.text} key={index}>
            {({ checked }) => (
              <span className={checked ? 'bg-blue-200' : ''}>{word.text}</span>
            )}
          </RadioGroup.Option>
        ))}
        {/**/}
      </div>
    </RadioGroup>
  );
};
