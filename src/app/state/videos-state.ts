import { create, StateCreator } from 'zustand';

export interface VideosSlice {
  mainVideosIds: File[];
  brollVideosIds: File[];
  addMainVideos: (file: File) => void;
  removeMainVideos: (fileName: string) => void;
  addBrollVideos: (file: File) => void;
  removeBrollVideos: (fileName: string) => void;
}

const createVideosSlice: StateCreator<VideosSlice> = (setState) => ({
  mainVideosIds: [],
  brollVideosIds: [],
  addMainVideos: (file: File) =>
    setState((state) => ({
      ...state,
      mainVideosIds: [...state.mainVideosIds, file],
    })),
  removeMainVideos: (fileName: string) =>
    setState((state) => ({
      ...state,
      mainVideosIds: state.mainVideosIds.filter((file) => file.name !== fileName),
    })),
  addBrollVideos: (id: File) =>
    setState((state) => ({
      ...state,
      brollVideosIds: [...state.brollVideosIds, id],
    })),
  removeBrollVideos: (fileName: string) =>
    setState((state) => ({
      ...state,
      brollVideosIds: state.brollVideosIds.filter((file) => file.name !== fileName),
    })),
});

export const useVideoStore = create<VideosSlice>()((...a) => ({
  ...createVideosSlice(...a),
}));
