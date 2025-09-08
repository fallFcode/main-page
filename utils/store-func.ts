import { create } from "zustand";

export const useStore = create((set) => ({
  isDetail: false,
  openDetail: () => set((state) => ({ isDetail: true })),
  closeDetail: () => set((state) => ({ isDetail: false })),
}));
