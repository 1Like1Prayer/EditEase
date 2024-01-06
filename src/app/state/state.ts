import { create } from 'zustand';
import {
  createTransitionSlice,
  TransitionSlice,
} from '@/app/state/transition-state';
import {
  createTranscriptionSlice,
  TranscriptionState,
} from '@/app/state/transcription-state';

export const useBoundStore = create<TransitionSlice & TranscriptionState>()(
  (...a) => ({
    ...createTransitionSlice(...a),
    ...createTranscriptionSlice(...a),
  }),
);
