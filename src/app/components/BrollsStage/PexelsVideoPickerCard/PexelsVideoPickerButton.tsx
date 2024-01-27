'use client';

import {
  PexelsVideoResponseType,
  PexelsVideoType,
  usePexelsVideo,
} from '@/app/hooks/usePexelsVideo/usePexelsVideo';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mapVideoMatchToMainVideo } from '@/app/utils/matchMainVideoToBrolls';
import { PlusIcon } from '@/app/components/icons/PlusIcon';
import {useAppSelector} from '@/app/state/redux/hooks';

interface PexelsVideoPickerButtonProps {
  onVideoChoosen: (video: PexelsVideoType) => void;
}

export const PexelsVideoPickerButton = ({
  onVideoChoosen,
}: PexelsVideoPickerButtonProps) => {
  const [searchText, setSearchText] = useState('');
  const [videos, setVideos] = useState<
    PexelsVideoResponseType['data']['videos']
  >([]);
  const mainVideo = useAppSelector(state=>state.video.mainVideo)

  const { data, refetch, refetchNextPage, isFetching } = usePexelsVideo({
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
    <div className='dropdown dropdown-bottom absolute'>
      <div className='relative'>
        <div className='tooltip' data-tip='edit b-roll' tabIndex={0}>
          <label className='button flex w-full flex-shrink-0 cursor-pointer items-center justify-center bg-gray-200 sm:h-max'>
            <PlusIcon />
          </label>
        </div>
      </div>
      <div
        className='card dropdown-content absolute z-10 mt-1 w-max gap-2 bg-white shadow-md'
        tabIndex={0}
      >
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
          <div className='grid grid-cols-5 gap-2 p-2'>
            {mapVideoMatchToMainVideo(videos,mainVideo).map((video) => (
              <video
                key={video.video_files[0].link}
                muted
                loop
                onClick={() => onVideoChoosen(video)}
                className={`sm:h-30 relative h-full cursor-pointer rounded-md object-cover transition duration-300 hover:rounded-md hover:opacity-30 sm:w-fit`}
                src={video.video_files[0].link}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
