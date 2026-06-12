"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  toggle: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      isDark: true,
      toggle: () => {
        const next = !get().isDark;
        if (next) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        set({ isDark: next });
      },
    }),
    { name: "railsy-theme" }
  )
);
