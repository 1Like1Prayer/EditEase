'use client'

import {RadioGroup} from "@headlessui/react";
import React, {ReactElement, useState} from "react";

interface ElementsProps {
  title: string,
  prefixIcon?: ReactElement<SVGElement>
  suffixIcon?: ReactElement<SVGElement>
}

interface ButtonGroupProps {
  elementProps: ElementsProps[]
  onSelect?: (index: number) => void
}

export const ButtonGroupSelector = ({elementProps}: ButtonGroupProps) => {

  const [selected, setSelected] = useState();
  return (
    <RadioGroup
      className='flex flex-row space-x-2'
      value={selected}
      onChange={setSelected}
    >
      {elementProps.map((elementProp, index) => (
          <>
          <RadioGroup.Option
            key={elementProp.title}
            value={elementProp.title}
            className={({ active, checked }) =>
              `${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                    focus:outline-none\ } relative flex cursor-pointer rounded-lg px-5 py-4
                shadow-md space-y-6`
            }
          >
            {elementProp.prefixIcon}
            {elementProp.title}
            {elementProp.suffixIcon}
          </RadioGroup.Option>
          </>
      ))}
    </RadioGroup>
  );
};
