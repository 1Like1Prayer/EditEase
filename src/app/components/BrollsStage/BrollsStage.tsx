'use client'
import React, { useState } from 'react';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import { VideoUploaderCard } from '@/app/components/VideoUploader/VideoUploaderCard';
import {
  getFileExtension,
  useS3PutObject,
} from '@/app/hooks/useS3Uploader/useS3PutObject';
import { useVideoStore } from '@/app/state/videos-state';
import { useBoundStore } from '@/app/state/transition-state';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios";

export const BrollsStage = () => {
  const activateTransition = useBoundStore((state) => state.activateTransition);
  const { upload } = useS3PutObject();
  const [fetchingHeadVideo, setFetchingHeadVideo] = useState(false);
  const [fetchingBrollVideo, setFetchingBrollVideo] = useState(false);
  const {
    mainVideosIds,
    brollVideosIds,
    addMainVideos,
    removeMainVideos,
    addBrollVideos,
    removeBrollVideos,
  } = useVideoStore();

  const {mutate: sendToApi} = useMutation({
    mutationFn: (body: any) => {
      return axios.post('http://api.edit-ease.com/videos', body);
    },
  });

  const onClickButton = async () => {
    setFetchingHeadVideo(true);
    await upload(mainVideosIds).then(() => setFetchingHeadVideo(false));

    setFetchingBrollVideo(true);
    await upload([]).then(() => setFetchingBrollVideo(false));

    const x = {
      name: 'my_new_video_from_client',
      filePath: '',
      size: 2048,
      length: 120,
      sourceVideosIds: [
        `${mainVideosIds[0].name}.${getFileExtension(mainVideosIds[0])}`,
      ],
      width: 1080,
      height: 1920,
      fps: 30,
    };

    // TODO: send the ids to API

    sendToApi(x);

    activateTransition();
  };

  return (
    <div className='absolute flex w-full flex-col items-center gap-10'>
      <div className='w-4/5 space-y-4'>
        <VideoUploaderCard
          title={'Select / Upload Your Main Videos'}
          selectedFiles={mainVideosIds}
          onSelectFile={addMainVideos}
          onUnselectFile={removeMainVideos}
        />
        {fetchingHeadVideo && (
          <span className='loading loading-ring loading-md'></span>
        )}
        <VideoUploaderCard
          title={'Select / Upload Your B-roll`s Clips'}
          selectedFiles={brollVideosIds}
          onSelectFile={addBrollVideos}
          onUnselectFile={removeBrollVideos}
        />
        {fetchingBrollVideo && (
          <span className='loading loading-ring loading-md'></span>
        )}
        <TranscriptCard />
      </div>
      <GenerateButton buttonText={'Merge Videos'} onClick={onClickButton} />
    </div>
  );
};
