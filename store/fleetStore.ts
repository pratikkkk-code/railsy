import { create } from "zustand";
import { FleetTrain, FleetSummary } from "@/types";
interface FleetStore {
  trains: FleetTrain[];
  summary: FleetSummary | null;
  setTrains: (t: FleetTrain[]) => void;
  setSummary: (s: FleetSummary) => void;
}
export const useFleetStore = create<FleetStore>((set) => ({
  trains: [], summary: null,
  setTrains: (trains) => set({ trains }),
  setSummary: (summary) => set({ summary }),
}));
