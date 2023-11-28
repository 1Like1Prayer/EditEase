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
    <RadioGroup value={selected} onChange={setSelected}>
      <div className={`grid space-x-2 ${
          gridCols ? `grid-cols-${gridCols}` : 'grid-flow-col'
      }`}>
        {elementProps.map((elementProp) => (
          <RadioGroup.Option
            key={elementProp.title}
            value={elementProp.title}
            className={({ checked }) =>
              `${
                checked
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-primary/30 active:bg-primary/40'
              }
                grid cursor-pointer auto-cols-max grid-flow-col items-center gap-2
                rounded-md px-4 py-1 m-1 shadow-sm transition focus:outline-none`
            }
          >
            <div>{elementProp.prefixIcon}</div>
            <div className='col-span-4 align-middle'>{elementProp.title}</div>
            <div>{elementProp.suffixIcon}</div>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
