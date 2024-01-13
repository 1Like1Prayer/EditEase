import { useBoundStore } from '@/app/state/state';
import { EditIcon } from '@/app/components/icons/EditIcon';
import { VoiceOverIcon } from '@/app/components/icons/VoiceOverIcon';
import { ClosedCaptionsIcon } from '@/app/components/icons/ClosedCaptionsIcon';
import { Select } from '@/app/components/shared/Select/Select';
import { Fragment } from 'react';

export const LineSelector = () => {
  const lines = useBoundStore((state) => state.transcription.lines);
  return (
    <>
      {Array.from(lines).map(([key, value]) => (
        <Fragment key={key}>
          <div className='col-span-3 flex flex-row items-center justify-between rounded-md bg-white px-4 py-2'>
            <div className='pr-2'>{value.text}</div>
            <EditIcon />
          </div>
          <div className='col-span-2 flex flex-row justify-evenly self-center'>
            <VoiceOverIcon
              isActive={value.config.dubbing.isDubbed}
              index={key}
            />
            <Select
              options={[
                { title: 'Benjamin, Male' },
                { title: 'Jasmin, Female' },
                { title: 'Johnny, Male' },
                { title: 'Mia, Female' },
              ]}
            />
            <ClosedCaptionsIcon isActive={value.config.isSubbed} index={key} />
          </div>
        </Fragment>
      ))}
    </>
  );
};
