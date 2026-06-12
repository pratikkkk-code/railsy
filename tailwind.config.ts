import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* Dark theme */
        "d-bg":        "#060B1A",
        "d-surface":   "#0D1426",
        "d-card":      "#111E35",
        "d-border":    "#1E3050",
        /* Light theme */
        "l-bg":        "#F0F2FA",
        "l-surface":   "#FFFFFF",
        "l-card":      "#FFFFFF",
        "l-border":    "rgba(0,0,128,0.12)",
        /* Brand */
        saffron:       "#FF9933",
        "saffron-d":   "#E65100",
        "saffron-l":   "#FFF3E0",
        igreen:        "#138808",
        "igreen-d":    "#1B5E20",
        "igreen-l":    "#E8F5E9",
        navy:          "#000080",
        "navy-l":      "#E8EAF6",
        ashoka:        "#0047AB",
      },
      boxShadow: {
        panel: "0 0 20px rgba(0,0,128,0.08)",
        "panel-dark": "0 0 20px rgba(0,212,255,0.06)",
      },
      borderRadius: { panel: "10px" },
    }
  },
  plugins: []
};
export default config;
