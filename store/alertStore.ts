import { create } from "zustand";
import { Alert } from "@/types";
interface AlertStore {
  alerts: Alert[];
  setAlerts: (a: Alert[]) => void;
  addAlert: (a: Alert) => void;
}
export const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  setAlerts: (alerts) => set({ alerts }),
  addAlert: (alert) => set((s) => ({ alerts: [alert, ...s.alerts] })),
}));
