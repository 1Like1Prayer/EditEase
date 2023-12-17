'use client';

import {
  PixelVideoResponseType,
  usePixelVideo,
} from '@/app/hooks/pixel/usePixelVideo';
import React, { ChangeEvent, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const PixelPickerCard = () => {
  const [searchText, setSearchText] = useState('');
  const [videos, setVideos] = useState<
    PixelVideoResponseType['data']['videos']
  >([]);
  const { data, refetch, refetchNextPage, isFetching } = usePixelVideo({
    searchText,
  });

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
          <span className='loading loading-ring loading-md justify-center'></span>
        }
        height={300}
        dataLength={videos.length}
      >
        <div className='grid grid-cols-5 gap-2'>
          {videos.map((video) => (
            <video
              key={video.video_files[2].link}
              muted
              loop
              className={`sm:h-30 relative h-full rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-fit`}
              src={video.video_files[2].link}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
