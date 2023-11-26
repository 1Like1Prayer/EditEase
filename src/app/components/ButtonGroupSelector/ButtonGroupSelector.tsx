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
}

export const ButtonGroupSelector = ({ elementProps }: ButtonGroupProps) => {
  const [selected, setSelected] = useState();
  return (
    <RadioGroup
      className='flex flex-row space-x-2'
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp) => (
        <div key={elementProp.title}>
          <RadioGroup.Option
            key={elementProp.title}
            value={elementProp.title}
            className={({ checked }) =>
              `${checked ? 'bg-secondary/75 text-white' : 'bg-white'}
                    focus:outline-none\ } relative cursor-pointer rounded-md px-4 grid grid-flow-col auto-cols-max gap-2
                py-1 shadow-md items-center`
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
