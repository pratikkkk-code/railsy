import { create } from "zustand";
import { TrainStatus } from "@/types";
interface TrainStore {
  train: TrainStatus | null;
  loading: boolean;
  setTrain: (t: TrainStatus) => void;
  setLoading: (b: boolean) => void;
}
export const useTrainStore = create<TrainStore>((set) => ({
  train: null, loading: false,
  setTrain: (train) => set({ train }),
  setLoading: (loading) => set({ loading }),
}));
