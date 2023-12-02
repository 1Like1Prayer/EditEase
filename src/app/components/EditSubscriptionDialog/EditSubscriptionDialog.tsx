'use client';
import { Select, SelectOptionType } from '@/app/components/Select/Select';
import {
  AlignCenterVertical,
  AlignEndVertical,
  AlignStartVertical,
  Bold,
  Italic,
} from 'lucide-react';
import { ColourPicker } from '@/app/components/ColourPicker/ColourPicker';

const FONT_OPTIONS: SelectOptionType[] = [
  { title: 'Futura' },
  { title: 'Ariel' },
  { title: 'David' },
];

interface EditSubscriptionDialogProps {
  isOpen?: boolean;
}

export const EditSubscriptionDialog = ({
  isOpen = true,
}: EditSubscriptionDialogProps) => {
  return isOpen ? (
    <div className='card bg-gray-400 text-sm'>
      <div className='grid grid-cols-2 gap-2'>
        <div className='card'>
          <div>Background Colour</div>
          <div>
            <ColourPicker />
          </div>
        </div>
        <div className='card'>
          <div>Text Colour</div>
          <div>
            <ColourPicker />
          </div>
          <div></div>
        </div>
        <div className='card col-span-2 flex flex-row items-center justify-between'>
          <div>Time being Said / shown</div>
          <div>00:43 - 01:02</div>
        </div>
        <div className='card col-span-2 flex flex-row items-center justify-between'>
          <div>Font</div>
          <div className='flex gap-2'>
            <Select options={FONT_OPTIONS} />
            <button className={'button'}>
              <Bold />
            </button>
            <button className={'button bg-transparent shadow-none'}>
              <Italic />
            </button>
          </div>
        </div>
        <div className='card col-span-2 flex flex-row items-center justify-between'>
          <div>Alignment</div>
          <div className='flex gap-2'>
            <button className={'button bg-transparent shadow-none'}>
              <AlignStartVertical />
            </button>
            <button className={'button bg-white shadow-none'}>
              <AlignCenterVertical />
            </button>
            <button className={'button bg-transparent shadow-none'}>
              <AlignEndVertical />
            </button>
          </div>
        </div>
        <div className='card col-span-2 flex flex-row items-center justify-between'>
          <div>Add Gif to Word</div>
          <div className='flex items-center gap-2'>
            <div>upload GIF</div>
            <button className={'button bg-transparent shadow-none'}>
              <AlignStartVertical />
            </button>
            <button className={'button bg-transparent shadow-none'}>
              <AlignEndVertical />
            </button>
          </div>
        </div>
        <div className='card col-span-2 flex flex-row items-center justify-between'>
          <div>Add Sound to Word</div>
          <div>upload Sound</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
