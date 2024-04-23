import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: "dark" | "light";
  setTheme: (theme: ThemeStore["theme"]) => void;
};

const createState: StateCreator<ThemeStore> = (set, _get) => ({
  theme: "light",
  setTheme: (theme) => {
    set({
      theme: theme,
    });
  },
});

export const useTheme = create(persist(createState, { name: "fga-acc-theme" }));
