import { create } from "zustand";

const loginStore = create((set) => ({
  isLogin: false,
  toggleLogin: () => set(state => ({isLogin: !state.isLogin }))
}))

export default loginStore