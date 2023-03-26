import { create } from "zustand";

type ModeT = {
  mode: string;
  setMode: (mode: string) => void;
};

const savedMode: string | null = localStorage.getItem("mode");
const parsedMode: string | undefined = savedMode
  ? JSON.parse(savedMode)
  : undefined;

const useMode = create<ModeT>((set) => ({
  mode: parsedMode ? parsedMode : "light",
  setMode: (mode: string) => set((state) => ({ mode: (state.mode = mode) })),
}));

export default useMode;
