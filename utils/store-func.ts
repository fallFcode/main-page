import { create } from "zustand";

type StoreState = {
  isDetail: boolean;
  openDetail: () => void;
  closeDetail: () => void;
};

export const useStore = create<StoreState>((set) => ({
  isDetail: false,
  openDetail: () => set((state) => ({ isDetail: true })),
  closeDetail: () => set((state) => ({ isDetail: false })),
}));
