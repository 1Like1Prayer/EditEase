'use client';
import React, { useEffect, useState } from 'react';
import { TranscriptCard } from '@/app/components/TranscriptCard/TranscriptCard';
import { GenerateButton } from '@/app/components/GenerateButton/GenerateButton';
import { VideoUploaderCard } from '@/app/components/VideoUploader/VideoUploaderCard';
import {getFileExtension, useS3PutObject} from '@/app/hooks/useS3Uploader/useS3PutObject';
import { useVideoStore } from '@/app/state/videos-state';
import { useBoundStore } from '@/app/state/transition-state';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { PexelsVideoPickerCard } from '@/app/components/PexelsVideoPickerCard/PexelsVideoPickerCard';
import { BrollsEditCard } from '@/app/components/BrollsEditCard/BrollsEditCard';

export const BrollsStage = () => {
  const activateTransition = useBoundStore((state) => state.activateTransition);
  const { upload } = useS3PutObject();
  const [isInProcess, setIsInProcess] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { mainVideo, brollVideos, addMainVideos, removeMainVideos } =
    useVideoStore();

  const { mutateAsync: createVideoMutation } = useMutation({
    mutationFn: (body: any) => {
      return axios.post('http://api.edit-ease.com/videos', body);
    },
  });

  const { mutateAsync: addBrollsMutation } = useMutation({
    mutationFn: (body: any) => {
      return axios.post('http://api.edit-ease.com/videos', body);
    },
  });

  const { mutateAsync: startProcess } = useMutation({
    mutationFn: (videoId: string) => {
      return axios.get(
        `http://api.edit-ease.com/process/start-video-creation/${videoId}`,
      );
    },
  });

  const onClickButton = async () => {
    if (mainVideo) {
      setIsInProcess(true);
      await upload([mainVideo]);

      const createVideo = {
        name: `${mainVideo.name}.${getFileExtension(mainVideo)}`,
        filePath: `s3://editeasebucket/videos/${mainVideo.name}.${getFileExtension(mainVideo)}`,
        size: mainVideo.size,
        length: 12,
        sourceVideos: [],
        width: 1080,
        height: 1920,
        fps: 30,
        gifEffects: [],
        imageEffects: [],
        soundEffects: [],
        transitions: [],
        texts: [],
        brolls: [],
      };

      createVideoMutation(createVideo)
        .then(({ data }) => {
          if (data?.id) {
            const addBrolls = {
              name: `${mainVideo.name}.${getFileExtension(mainVideo)}`,
              filePath: '',
              size: mainVideo!.size,
              length: 12,
              width: 1080,
              height: 1920,
              fps: 30,
              sourceVideosIds: [data.id],
              gifEffects: [],
              imageEffects: [],
              soundEffects: [],
              transitions: [],
              texts: [],
              brolls: Array.from(brollVideos.values()).map(
                ({ pexelId, qualityId, link, startTime, endTime }) => ({
                  pexel_id: pexelId,
                  pexel_quality_id: qualityId,
                  source_video_id: mainVideo.name,
                  pexel_video_url: link,
                  video_url: '',
                  length: 10,
                  video_start_time: startTime,
                  broll_start_time: 0,
                  broll_end_time: endTime,
                }),
              ),
            };

            return addBrollsMutation(addBrolls);
          }
        })
        .then((data) => {
          startProcess(data?.data.id);
        })
        .finally(() => {
          setIsInProcess(false);
          activateTransition();
        });
    } else {
      alert('upload your main video first');
    }
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
        <PexelsVideoPickerCard />
        <BrollsEditCard />
        <TranscriptCard />
      </div>
      {isInProcess ? (
        <progress className='progress w-full'></progress>
      ) : isReady ? (
        <GenerateButton buttonText={'Merge Videos'} />
      ) : (
        <button className='button' onClick={onClickButton}>
          upload
        </button>
      )}
    </div>
  );
};
