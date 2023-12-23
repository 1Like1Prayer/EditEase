'use client';
import React, { useState } from 'react';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import { VideoUploaderCard } from '@/app/components/VideoUploader/VideoUploaderCard';
import {
  useS3PutObject,
} from '@/app/hooks/useS3Uploader/useS3PutObject';
import { useVideoStore } from '@/app/state/videos-state';
import { useBoundStore } from '@/app/state/transition-state';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { PexelsVideoPickerCard } from '@/app/components/PexelsVideoPickerCard/PexelsVideoPickerCard';
import {BrollsEditCard} from "@/app/components/BrollsEditCard/BrollsEditCard";

export const BrollsStage = () => {
  const activateTransition = useBoundStore((state) => state.activateTransition);
  const { upload } = useS3PutObject();
  const [fetchingHeadVideo, setFetchingHeadVideo] = useState(false);
  const { mainVideo, brollVideos, addMainVideos, removeMainVideos } =
    useVideoStore();

  const { mutate: sendToApi } = useMutation({
    mutationFn: (body: any) => {
      return axios.post('http://api.edit-ease.com/videos', body);
    },
  });

  const onClickButton = async () => {
    if (mainVideo) {
      // setFetchingHeadVideo(true);
      // await upload([mainVideo]).then(() => setFetchingHeadVideo(false));

      const y = {
        name: 'My_beautiful_video_idan',
        filePath: 'video/',
        size: mainVideo.size,
        length: 12,
        sourceVideosIds: [mainVideo.name],
        width: 1080,
        height: 1920,
        fps: 30,
        gifEffects: [],
        imageEffects: [],
        soundEffects: [],
        transitions: [],
        texts: [],
        brolls: brollVideos.map((broll) => ({
          pexel_id: broll.pexelId,
          pexel_quality_id: broll.qualityId,
          source_video_id: mainVideo.name,
          pexel_video_url: '',
          video_url: '',
          length: 0,
          video_start_time: 5,
          broll_start_time: 5,
          broll_end_time: 5,
        })),
      };

      // TODO: send the ids to API
      // sendToApi(y);

      activateTransition();
    } else {
      alert('upload your main video first');
    }
    activateTransition();

  };

  return (
    <div className='absolute flex w-full flex-col items-center gap-10'>
      <div className='w-4/5 space-y-4'>
        <VideoUploaderCard
          title={'Select / Upload Your Main Videos'}
          selectedFiles={mainVideo}
          onSelectFile={addMainVideos}
          onUnselectFile={removeMainVideos}
        />
        {fetchingHeadVideo && (
          <span className='loading loading-ring loading-md'></span>
        )}
        <PexelsVideoPickerCard />
        <BrollsEditCard/>
        <TranscriptCard />
      </div>
      <GenerateButton buttonText={'Merge Videos'} onClick={onClickButton} />
    </div>
  );
};
