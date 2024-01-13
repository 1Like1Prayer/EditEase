'use client';
import React, { useState } from 'react';

import { GenerateButton } from '@/app/components/shared/GenerateButton/GenerateButton';

import { useS3PutObject } from '@/app/hooks/useS3Uploader/useS3PutObject';
import { useVideoStore } from '@/app/state/videos-state';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useBoundStore } from '@/app/state/state';

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

  const isVideosValid = (): boolean =>
    !!mainVideo != null &&
    brollVideos.every(
      (brollVideo) => !!brollVideo.startTime && !!brollVideo.endTime,
    );

  const onClickButton = async () => {
    if (!mainVideo) {
      alert('main video missing');
    } else if (
      !Array.from(brollVideos.values()).every(
        (brollVideo) => !!brollVideo.startTime && !!brollVideo.endTime,
      )
    ) {
      alert('please choose time to ALL brolls');
    } else {
      setIsInProcess(true);
      await upload([mainVideo]);

      const createVideo = {
        name: `${mainVideo.name}`,
        filePath: `s3://editeasebucket/videos/${mainVideo.name}`,
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
            console.log(`video id: ${data?.id}`);
            const addBrolls = {
              name: `${mainVideo.name}`,
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
                  length: endTime,
                  video_start_time: startTime,
                  broll_start_time: 0,
                  broll_end_time: endTime! - startTime!,
                }),
              ),
            };

            return addBrollsMutation(addBrolls);
          }
        })
        .then((data) => {
          console.log(`video id: ${data?.data.id}`);
          return startProcess(data?.data.id);
        })
        .then(({ data }) => {
          console.log(`process id: ${data?.processId}`);
        })
        .finally(() => {
          setIsInProcess(false);
          activateTransition();
        });
    }
  };

  return (
    <div className='absolute flex w-full flex-col items-center gap-10'>
      {isInProcess ? (
        <progress className='progress w-full'></progress>
      ) : isReady ? (
        <GenerateButton buttonText={'Merge Videos'}/>
      ) : (
        <button className='button' onClick={onClickButton}>
          upload
        </button>
      )}
    </div>
  );
};
