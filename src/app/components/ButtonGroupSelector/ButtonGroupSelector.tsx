'use client';

import { RadioGroup } from '@headlessui/react';
import React, { ReactElement, useState } from 'react';

interface ElementsProps {
  title: string;
  prefixIcon?: ReactElement<SVGElement>;
  suffixIcon?: ReactElement<SVGElement>;
}

interface ButtonGroupProps {
  elementProps: ElementsProps[];
  onSelect?: (index: number) => void;
  gridCols?: number;
}

export const ButtonGroupSelector = ({
  elementProps,
  onSelect,
  gridCols,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState();
  return (
    <RadioGroup
      className={`grid grid-flow-col space-x-2 ${
        gridCols ? `grid-cols-${gridCols}` : ''
      }`}
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp) => (
        <div key={elementProp.title}>
          <RadioGroup.Option
            key={elementProp.title}
            value={elementProp.title}
            className={({ checked }) =>
              `${checked ? 'bg-primary text-white' : 'bg-white'}
                    focus:outline-none\ } relative grid cursor-pointer auto-cols-max grid-flow-col items-center gap-2 rounded-md
                border-2 px-4 py-1`
            }
          >
            <div>{elementProp.prefixIcon}</div>
            <div className='col-span-4 align-middle'>{elementProp.title}</div>
            <div>{elementProp.suffixIcon}</div>
          </RadioGroup.Option>
        </div>
      ))}
    </RadioGroup>
  );
};
