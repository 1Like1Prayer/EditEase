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
              `${checked ? 'bg-[#EE09CE] text-white' : 'bg-gray-400'}
                    cursor-pointer rounded-md shadow-lg focus:outline-none w-1/2 text-sm flex flex-row justify-evenly items-center h-1/2`
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
