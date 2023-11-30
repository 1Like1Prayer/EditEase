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
      className='grid grid-cols-2 gap-4'
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp) => (
        <RadioGroup.Option
          key={elementProp.title}
          value={elementProp.title}
          className={({ checked }) =>
            `${checked ? 'bg-[#EE09CE] text-white' : 'bg-gray-400'}
                    justify-self-center flex w-5/6 px-1 cursor-pointer flex-row items-center justify-evenly rounded-md text-xs shadow-lg focus:outline-none `
          }
        >
          {elementProp.prefixIcon}
          {elementProp.title}
          {elementProp.suffixIcon}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
