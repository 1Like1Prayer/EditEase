'use client';

import { PexelsVideoResponseType } from '@/app/hooks/usePexelsVideo/usePexelsVideo';
import { useAppSelector } from '@/app/state/redux/hooks';

// TODO: use sharp to match the broll size to the main video size
export const mapVideoMatchToMainVideo = (
  videos: PexelsVideoResponseType['data']['videos'],
): PexelsVideoResponseType['data']['videos'] => {
  const mainVideo = useAppSelector((state) => state.video.mainVideo);
  return videos
    .map((video) => ({
      ...video,
      video_files: video.video_files.filter(
        (videoQuality) =>
          videoQuality.height === 1080 && videoQuality.width === 1920,
      ),
    }))
    .filter((video) => video.video_files.length > 0);

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
