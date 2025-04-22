import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { USER_STORE_PERSIST } from "../const";

const useUserStore = create()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set(() => ({ user })),
      }),
      {
        name: USER_STORE_PERSIST,
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useUserStore;
