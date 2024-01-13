import { useBoundStore } from '@/app/state/state';
import { EditIcon } from '@/app/components/icons/EditIcon';
import { VoiceOverIcon } from '@/app/components/icons/VoiceOverIcon';
import { ClosedCaptionsIcon } from '@/app/components/icons/ClosedCaptionsIcon';
import { Select } from '@/app/components/shared/Select/Select';
import React, { Fragment, useState } from 'react';
import { PexelsVideoPickerButton } from '@/app/components/BrollsStage/PexelsVideoPickerCard/PexelsVideoPickerButton';
import { BrollVideoType } from '@/app/state/videos-state';
import { PexelsVideoType } from '@/app/hooks/usePexelsVideo/usePexelsVideo';
import {
  ANIMATION_OPTIONS,
  BrollEdit,
} from '@/app/components/BrollsStage/BrollEdit/BrollEdit';

export const LineSelector = () => {
  const lines = useBoundStore((state) => state.transcription.lines);
  const [brollVideo, setBrollVideo] = useState<BrollVideoType>();
  const onPexelVideoChoosen = (video: PexelsVideoType) => {
    setBrollVideo({
      pexelId: video.id,
      qualityId: video.video_files[0].id,
      link: video.video_files[0].link,
      animation: ANIMATION_OPTIONS[0].name,
      videoType: 'broll',
      eyeContact: false,
    });
  };

  return (
    <>
      {Array.from(lines).map(([key, value]) => (
        <Fragment key={key}>
          <div>
            {brollVideo ? (
              <BrollEdit
                broll={brollVideo}
                onDelete={() => setBrollVideo(undefined)}
                onSave={(broll) => setBrollVideo(broll)}
              />
            ) : (
              <PexelsVideoPickerButton onVideoChoosen={onPexelVideoChoosen} />
            )}
          </div>
          <div className='col-span-2 flex flex-row items-center justify-between rounded-md bg-white px-4 py-2'>
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
