import { create } from "zustand";

type UserStoreState = {
  name: string;
  surname: string;
  accessToken: string;
  refreshToken: string;
};

type UserStoreAction = {
  setUser: (payload: Partial<UserStoreState>) => void;
  resetUser: () => void;
};

type UserStore = UserStoreState & UserStoreAction;

const initialState: UserStoreState = {
  name: "",
  surname: "",
  accessToken: "",
  refreshToken: "",
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (payload: Partial<UserStoreState>) => set({ ...payload }),
  resetUser: () => set(initialState),
}));
