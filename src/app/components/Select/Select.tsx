import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckedCircle } from '@/app/components/icons/CheckedCircle';
import { ChevronDown } from '@/app/components/icons/ChevronDown';
import { Check } from '@/app/components/icons/Check';

export interface SelectOptionType {
  title: string;
}
interface SelectProps {
  options: SelectOptionType[];
}

const DEFAULT_OPTION: SelectOptionType = { title: 'No Options' };

export const Select = ({ options }: SelectProps) => {
  const [selected, setSelected] = useState<SelectOptionType>(
    options?.[0] || DEFAULT_OPTION,
  );

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm'>
          <span className='block truncate'>{selected.title}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronDown />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-md ring-1 ring-black/5 focus:outline-none sm:text-sm'>
            {options.map((option, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-primary/20 text-black' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-bold' : 'font-normal'
                      }`}
                    >
                      {option.title}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-primary'>
                        <Check />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
