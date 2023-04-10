import { create } from "zustand";
import { LoginT, AuthT } from "../types/types";
import authAPI from "./../services/authAPI";

const useAuth = create<AuthT>((set) => ({
  user: null,
  loading: false,
  setUser: async (payload: LoginT) => {
    try {
      set((state) => ({ loading: (state.loading = true) }));
      const res = await authAPI.login(payload);
      set((state) => ({ user: (state.user = res) }));
      set((state) => ({ loading: (state.loading = false) }));
    } catch (error) {
      set((state) => ({ loading: (state.loading = false) }));
      console.log(error);
    }
  },
}));

export default useAuth;
