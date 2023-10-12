import { create } from "zustand";

interface AuthStore {
  isAuth: boolean;
  setAuth: (authStatus: boolean)=>void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  setAuth: (authStatus) => set({ isAuth: authStatus }),
}));
