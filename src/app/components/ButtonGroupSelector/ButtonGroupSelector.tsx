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
      className='flex flex-row justify-evenly gap-4 p-2'
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp) => (

          <RadioGroup.Option
            key={elementProp.title}
            value={elementProp.title}
            className={({ checked }) =>
              `${checked ? 'bg-secondary/75 text-white' : 'bg-white'}
                    cursor-pointer rounded-md shadow-lg focus:outline-none w-1/2 text-sm flex flex-row justify-evenly h-1/2`
            }
          >
            <div>{elementProp.prefixIcon}</div>
            <div className=''>{elementProp.title}</div>
            <div>{elementProp.suffixIcon}</div>
          </RadioGroup.Option>

      ))}
    </RadioGroup>
  );
};
