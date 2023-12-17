import { create, StateCreator } from 'zustand';

interface BrollVideoType {
  pexelId: number;
  qualityId: number;
  link: string;
}

export interface VideosSlice {
  mainVideo: File | null;
  addMainVideos: (file: File) => void;
  removeMainVideos: (fileName: string) => void;
  brollVideos: BrollVideoType[];
  addBrollVideos: (broll: BrollVideoType) => void;
  removeBrollVideos: (pexelId: BrollVideoType['pexelId']) => void;
}

const createVideosSlice: StateCreator<VideosSlice> = (setState) => ({
  mainVideo: null,
  brollVideos: [],
  addMainVideos: (file: File) =>
    setState((state) => ({
      ...state,
      mainVideo: file,
    })),
  removeMainVideos: () =>
    setState((state) => ({
      ...state,
      mainVideo: null,
    })),
  addBrollVideos: (broll: BrollVideoType) =>
    setState((state) => ({
      ...state,
      brollVideos: [...state.brollVideos, broll],
    })),
  removeBrollVideos: (pexelId: BrollVideoType['pexelId']) =>
    setState((state) => ({
      ...state,
      brollVideos: state.brollVideos.filter(
        (broll) => broll.pexelId !== pexelId,
      ),
    })),
});

export const useVideoStore = create<VideosSlice>()((...a) => ({
  ...createVideosSlice(...a),
}));
