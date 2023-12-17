'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export interface PixelVideoResponseType {
  data: {
    page: number;
    url: string;
    next_page: string;
    videos: {
      id: number;
      width: number;
      height: number;
      video_files: {
        id: number;
        quality: string;
        file_type: string;
        width: number;
        height: number;
        link: string;
      }[];
    }[];
  };
}

interface UsePixelVideoProps {
  searchText?: string;
}

export const usePixelVideo = ({ searchText }: UsePixelVideoProps) => {
  const [page, setPage] = useState(1);
  const { refetch, ...result } = useQuery<PixelVideoResponseType>({
    queryKey: ['pixelQuery'],
    queryFn: () =>
      axios.get(
        `https://api.pexels.com/videos/${
          searchText
            ? `search?query=${searchText}&page=${page}`
            : `popular?page=${page}`
        }`,
        {
          headers: {
            Authorization:
              'NuwlmOzE4dmN0JXh8Odjmyetge2KJRNnYM7ubWY2lc3pQEXUQyaj22H3',
          },
        },
      ),
  });

  const refetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return { ...result, refetch, refetchNextPage };
};
