import { create } from "zustand";
import { ModeT } from "../types/types";

const savedMode: string | null = localStorage.getItem("mode");
const parsedMode: string | undefined = savedMode
  ? JSON.parse(savedMode)
  : undefined;

const useMode = create<ModeT>((set) => ({
  mode: parsedMode ? parsedMode : "dark",
  setMode: (mode: string) => set((state) => ({ mode: (state.mode = mode) })),
}));

export default useMode;
