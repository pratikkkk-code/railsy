"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const { isDark, toggle } = useThemeStore();
  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to Light" : "Switch to Dark"}
      className="
        flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
        border transition-all duration-200
        bg-white/10 border-white/20 text-white hover:bg-white/20
        dark:bg-white/10 dark:border-white/20
      "
    >
      {isDark
        ? <><Sun size={13} className="text-saffron" /><span className="hidden sm:inline">Light</span></>
        : <><Moon size={13} className="text-navy" /><span className="hidden sm:inline">Dark</span></>
      }
    </button>
  );
}
