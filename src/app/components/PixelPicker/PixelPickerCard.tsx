'use client';

import {
  PixelVideoResponseType,
  PixelVideoType,
  usePixelVideo,
} from '@/app/hooks/pixel/usePixelVideo';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mapVideoMatchToMainVideo } from '@/app/utils/matchMainVideoToBrolls';
import { useVideoStore } from '@/app/state/videos-state';

export const PixelPickerCard = () => {
  const [searchText, setSearchText] = useState('');
  const [videos, setVideos] = useState<
    PixelVideoResponseType['data']['videos']
  >([]);
  const { addBrollVideos, brollVideos } = useVideoStore();

  const { data, refetch, refetchNextPage, isFetching } = usePixelVideo({
    searchText,
  });

  const addBroll = (
    video: PixelVideoType,
    videoQuality: PixelVideoType['video_files'][0],
  ) => {
    addBrollVideos({
      pixelId: video.id,
      qualityId: videoQuality.id,
      link: videoQuality.link,
    });
  };

  const onSubmit = () => {
    setVideos([]);
    refetch();
  };

  useEffect(() => {
    if (data) {
      setVideos((videos) => [...videos, ...data.data.videos]);
    }
  }, [data]);

  return (
    <div className='card justify-center gap-2'>
      <div className='flex gap-2'>
        <input
          className='input basis-4/5 bg-white'
          type='text'
          placeholder='Search for video'
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
        <button className='button basis-1/5 bg-primary' onClick={onSubmit}>
          submit
        </button>
      </div>
      <InfiniteScroll
        next={refetchNextPage}
        hasMore={!!data?.data.next_page}
        loader={
          <span className='loading loading-dots loading-md justify-center'></span>
        }
        height={300}
        dataLength={videos.length}
      >
        <div className='grid grid-cols-5 gap-2'>
          {mapVideoMatchToMainVideo(videos).map((video) => (
            <video
              key={video.video_files[0].link}
              muted
              loop
              onClick={() => addBroll(video, video.video_files[0])}
              className={`sm:h-30 relative h-full rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-fit`}
              src={video.video_files[0].link}
            />
          ))}
        </div>
      </InfiniteScroll>
      <div className='grid grid-cols-5 gap-2'>
        {brollVideos.map((broll) => (
          <video
            key={broll.link}
            muted
            loop
            className={`sm:h-30 relative h-full rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-fit`}
            src={broll.link}
          />
        ))}
      </div>
    </div>
  );
};
