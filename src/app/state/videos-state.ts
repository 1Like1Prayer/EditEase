import { create, StateCreator } from 'zustand';
import {Map} from 'immutable'

export interface BrollVideoType {
  pexelId: number;
  qualityId: number;
  link: string;
  startTime?: number;
  endTime?: number;
}

export interface VideosSlice {
  mainVideo: File | null;
  addMainVideos: (file: File) => void;
  removeMainVideos: (fileName: string) => void;
  brollVideos: Map<number, BrollVideoType>;
  addBrollVideos: (broll: BrollVideoType) => void;
  removeBrollVideos: (pexelId: BrollVideoType['pexelId']) => void;
}

const createVideosSlice: StateCreator<VideosSlice> = (setState) => ({
  mainVideo: null,
  brollVideos: Map<number, BrollVideoType>(),
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
      brollVideos: state.brollVideos.set(broll.pexelId, broll),
    })),
  removeBrollVideos: (pexelId: BrollVideoType['pexelId']) =>
    setState((state) => ({
      ...state,
      brollVideos: state.brollVideos.delete(pexelId),
    })),
});

export const useVideoStore = create<VideosSlice>()((...a) => ({
  ...createVideosSlice(...a),
}));
