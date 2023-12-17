'use client';

import { PixelVideoResponseType } from '@/app/hooks/pixel/usePixelVideo';
import { useVideoStore } from '@/app/state/videos-state';

// TODO: use sharp to match the broll size to the main video size
export const mapVideoMatchToMainVideo = (
  videos: PixelVideoResponseType['data']['videos'],
): PixelVideoResponseType['data']['videos'] => {
  const mainVideo = useVideoStore.getState().mainVideo;
  return videos.map((video) => ({
    ...video,
    video_files: video.video_files.filter(
      (videoQuality) =>
        videoQuality.height === 1080 && videoQuality.width === 1920,
    ),
  })).filter((video) => video.video_files.length > 0);

  // if (mainVideo) {
  //   sharp(URL.createObjectURL(mainVideo))
  //     .metadata()
  //     .then((metadata) => {
  //       const width = metadata.width;
  //       const height = metadata.height;
  //       console.log(`Image dimensions from sharp: ${width}x${height}`);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
  // return videos;
};
