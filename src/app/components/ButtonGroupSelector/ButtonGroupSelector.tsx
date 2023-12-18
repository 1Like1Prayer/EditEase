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
  setState?: () => void;
}

export const ButtonGroupSelector = ({
  elementProps,
  setState,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState<string>(elementProps?.[0].title);
  return (
    <RadioGroup
      className='grid grid-cols-2 gap-2'
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp) => (
        <RadioGroup.Option
          key={elementProp.title}
          value={elementProp.title}
          className={({ checked }) =>
            `button flex items-center justify-evenly justify-self-center text-center text-xs focus:outline-none sm:w-2/3 sm:text-sm
            ${checked && 'bg-primary hover:bg-primary/75'}`
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
