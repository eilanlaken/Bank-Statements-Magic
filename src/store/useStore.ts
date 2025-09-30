import { create } from "zustand";

interface State {
  tokens: number;
  user: { name: string } | null;
  setTokens: (value: number) => void;
  setUser: (user: { name: string } | null) => void;
}

export const useStore = create<State>((set) => ({
  tokens: 0,
  user: null,
  setTokens: (value) => set({ tokens: value }),
  setUser: (user) => set({ user }),
}));
