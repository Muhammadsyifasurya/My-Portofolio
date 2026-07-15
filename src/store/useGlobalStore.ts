import { create } from 'zustand';

interface GlobalState {
  isLanyardFlipped: boolean;
  toggleLanyard: () => void;
  setLanyardFlipped: (flipped: boolean) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isLanyardFlipped: false,
  toggleLanyard: () => set((state) => ({ isLanyardFlipped: !state.isLanyardFlipped })),
  setLanyardFlipped: (flipped) => set({ isLanyardFlipped: flipped }),
}));
