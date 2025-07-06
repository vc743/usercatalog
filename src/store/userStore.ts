import { create } from "zustand"
import { type UserType } from "../utils/validation"

interface UserStore {
  users: UserType[]
  setUsers: (users: UserType[]) => void
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}))
