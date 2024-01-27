import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BrollVideoType {
  pexelId: number;
  qualityId: number;
  link: string;
  startTime?: number;
  endTime?: number;
  animation: string;
  videoType: 'broll' | 'original' | 'lipSync';
  eyeContact: boolean;
}

export interface VideosSlice {
  mainVideo: File | null;
  brollVideos: Map<number, BrollVideoType>;
}

const initialState: VideosSlice = {
  mainVideo: null,
  brollVideos: new Map<number, BrollVideoType>(),
};
export const videosSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addMainVideo: (state, action: PayloadAction<File>) => {
      state.mainVideo = action.payload;
    },
    removeMainVideos: (state) => {
      state.mainVideo = null;
    },
    addBrollVideos: (state, action: PayloadAction<BrollVideoType>) => {
      state.brollVideos.set(action.payload.pexelId, action.payload);
    },
    removeBrollVideos: (
      state,
      action: PayloadAction<BrollVideoType['pexelId']>,
    ) => {
      state.brollVideos.delete(action.payload);
    },
  },
});

export const {
  removeBrollVideos,
  removeMainVideos,
  addMainVideo,
  addBrollVideos,
} = videosSlice.actions;
