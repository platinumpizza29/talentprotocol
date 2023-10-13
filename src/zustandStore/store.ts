import { create } from "zustand";

interface AuthStore {
  isAuth: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuth: !!localStorage.getItem('jwtToken'),
  login: (token) => {
    localStorage.setItem('jwtToken', token);
    set({ isAuth: true });
  },
  logout: () => {
    localStorage.removeItem('jwtToken');
    set({ isAuth: false });
  },
}));


export default useAuthStore;