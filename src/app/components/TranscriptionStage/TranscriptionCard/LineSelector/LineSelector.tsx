import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useBoundStore } from '@/app/state/state';

export const LineSelector = () => {
  const lines = useBoundStore((state) => state.transcription.lines);

  const [selectedLine, setSelectedLine] = useState<string>('');
  useEffect(() => {
    console.log(lines);
  }, [lines]);
  return (
    <RadioGroup
      value={selectedLine}
      onChange={setSelectedLine}
      className='col-span-5'
    >
      <div className='flex flex-row gap-3 '>
        {Array.from(lines).map(([key, value]) => (
          <RadioGroup.Option value={value.text} key={key}>
            {({ checked }) => (
              <div className={checked ? 'bg-blue-200' : ''}>{value.text}</div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
