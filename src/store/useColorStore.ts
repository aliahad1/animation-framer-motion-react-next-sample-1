import create from "zustand";

interface ColorState {
  textColor: string;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  setTextColor: (textColor: string) => void;
}

const useColorStore = create<ColorState>()((set) => ({
  backgroundColor: "#49467d",
  textColor: "#ffffff",
  setBackgroundColor: (backgroundColor) =>
    set(() => ({ backgroundColor: backgroundColor })),
  setTextColor: (textColor) => set(() => ({ textColor: textColor })),
}));

export default useColorStore;
