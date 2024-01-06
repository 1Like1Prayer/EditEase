'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export interface PexelsVideoType {
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
}

export interface PexelsVideoResponseType {
  data: {
    page: number;
    url: string;
    next_page: string;
    videos: PexelsVideoType[];
  };
}

interface UsePexelsVideoProps {
  searchText?: string;
}

export const usePexelsVideo = ({ searchText }: UsePexelsVideoProps) => {
  const [page, setPage] = useState(1);
  const { refetch, ...result } = useQuery<PexelsVideoResponseType>({
    queryKey: ['pexelsQuery'],
    queryFn: () =>
      axios.get(
        `https://api.pexels.com/videos/${
          searchText
            ? `search?query=${searchText}&page=${page}&size=medium&orientation=landscape&per_page=50`
            : `popular?page=${page}&size=medium&orientation=landscape&per_page=50`
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
