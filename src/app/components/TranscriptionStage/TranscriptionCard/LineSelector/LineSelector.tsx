import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useBoundStore } from '@/app/state/state';
import {KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";

export const LineSelector = () => {
  const lines = useBoundStore((state) => state.transcription.lines);

  const [selectedLine, setSelectedLine] = useState<string>('');

  return (
    <RadioGroup
      value={selectedLine}
      onChange={setSelectedLine}
      className='col-span-3'
    >
      <div className='flex flex-row gap-3 '>
        {Array.from(lines.values()).map((line, index) => (
          <RadioGroup.Option value={line.text} key={index}>
            {({ checked }) => (
              <div className={checked ? 'bg-blue-200' : ''}>{line.text}</div>
            )}
          </RadioGroup.Option>
        ))}
        {/**/}
      </div>
    </RadioGroup>
  );
};
