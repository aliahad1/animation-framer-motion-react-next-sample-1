import create from "zustand";

interface HamburgerStore {
  isHamburgerOpen: boolean;
  isHamburgerAnimating: boolean;
  setisHamburgerAnimating: (isHamburgerAnimating: boolean) => void;
  toggleHamburger: () => void;
}

const useHamburgerStore = create<HamburgerStore>((set) => ({
  isHamburgerOpen: false,
  isHamburgerAnimating: false,
  setisHamburgerAnimating: (isHamburgerAnimating) =>
    set({ isHamburgerAnimating }),
  toggleHamburger: () =>
    set((state) => ({ isHamburgerOpen: !state.isHamburgerOpen })),
}));

export default useHamburgerStore;
