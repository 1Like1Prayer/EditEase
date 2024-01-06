import { create, StateCreator } from 'zustand';

export interface TransitionSlice {
  isShowing: boolean;
  activateTransition: () => void;
}

export const createTransitionSlice: StateCreator<TransitionSlice> = (set) => ({
  isShowing: true,
  activateTransition: () => set((state) => ({ isShowing: !state.isShowing })),
});
