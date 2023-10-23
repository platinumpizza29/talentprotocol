import { create } from "zustand";

interface AuthStore {
  currentPage: number
  loading: boolean
  isAuth: boolean;
  user: {
    full_name:string,
    email: string,
    password:string,
    age:string
  } | null;

  code: string

  login: (token: string) => void;
  logout: () => void;

  setUser: (user: AuthStore['user'])=>void

  setCode: (code: string) => void

  setLoading: (loading: boolean)=> void

  setCurrentPage: (currentPage: number)=> void
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuth: !!localStorage.getItem('jwtToken'),
  currentPage: 0,
  user: null,
  loading: false,
  code :"",
  login: (token) => {
    localStorage.setItem('jwtToken', token);
    set({ isAuth: true });
  },
  logout: () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user_details');
    set({ isAuth: false });
  },
  
  setUser: (user) => set({ user }),

  setCode: (code) => set({code}),

  setLoading: (loading:boolean) => set({loading}),

  setCurrentPage: (currentPage: number) => set({currentPage})
}));


export default useAuthStore;