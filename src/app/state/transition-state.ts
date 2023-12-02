import { create, StateCreator } from 'zustand';

export interface TransitionSlice {
  isShowing: boolean;
  activateTransition: () => void;
}

const createTransitionSlice: StateCreator<TransitionSlice> = (set) => ({
  isShowing: true,
  activateTransition: () => set((state) => ({ isShowing: !state.isShowing })),
});

export const useBoundStore = create<TransitionSlice>()((...a) => ({
  ...createTransitionSlice(...a),
}));
