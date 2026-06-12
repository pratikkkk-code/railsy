"use client";
import MainLayout from "@/components/layout/MainLayout";
import { useThemeStore } from "@/store/themeStore";
import ThemeToggle from "@/components/ui/ThemeToggle";
export default function SettingsPage() {
  const { isDark } = useThemeStore();
  return (
    <MainLayout>
      <div id="settings-page" className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-saffron-d dark:text-saffron mb-6">Settings</h1>
        <form id="settings-form" className="panel p-6 space-y-6">

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Theme</label>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">Current: <strong>{isDark ? "Dark" : "Light"}</strong></span>
              <ThemeToggle />
            </div>
          </div>

          {/* Map Theme */}
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Map Style</label>
            <select className="w-full p-3 rounded-lg bg-slate-50 dark:bg-d-surface border border-slate-200 dark:border-d-border text-sm focus:outline-none focus:ring-1 focus:ring-saffron">
              <option>Dark</option>
              <option>Satellite</option>
              <option>Streets</option>
            </select>
          </div>

          {/* API URL */}
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">API Base URL</label>
            <input defaultValue="http://localhost:5000" className="w-full p-3 rounded-lg bg-slate-50 dark:bg-d-surface border border-slate-200 dark:border-d-border text-sm focus:outline-none focus:ring-1 focus:ring-saffron"/>
          </div>

          {/* Toggles */}
          {[
            { label:"Real-time Alerts",     def: true },
            { label:"AI Recommendations",   def: true },
            { label:"Push Notifications",   def: false },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-d-border last:border-0">
              <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={item.def} className="sr-only peer"/>
                <div className="w-10 h-5 bg-slate-200 peer-checked:bg-saffron rounded-full transition-colors after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:after:translate-x-5"/>
              </label>
            </div>
          ))}

          <button id="save-settings-btn" type="button" className="bg-saffron text-navy font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm">
            Save Settings
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
