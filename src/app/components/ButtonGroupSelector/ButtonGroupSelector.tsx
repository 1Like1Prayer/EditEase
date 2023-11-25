'use client'

import {RadioGroup} from "@headlessui/react";
import React, {useState} from "react";

export const ButtonGroupSelector = () => {
  const plans = [
    {
      name: 'Original Transcription',
    },
    { name: 'My Transcription' },
  ];

  const [selected, setSelected] = useState(plans[0]);
  return (
    <RadioGroup
      className='flex flex-row space-x-2'
      value={selected}
      onChange={setSelected}
    >
      {plans.map((plan) => (
        <>
          <RadioGroup.Option
            key={plan.name}
            value={plan.name}
            className={({ active, checked }) =>
              `${
                active
                  ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : ''
              }  ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                    focus:outline-none\ } relative flex cursor-pointer rounded-lg px-5 py-4
                shadow-md`
            }
          >
            {plan.name}
          </RadioGroup.Option>
        </>
      ))}
    </RadioGroup>
  );
};
