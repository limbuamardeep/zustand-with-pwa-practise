import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "theme storage",
    },
  ),
);
