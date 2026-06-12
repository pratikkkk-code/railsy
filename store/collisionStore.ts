import { create } from "zustand";
import { CollisionRisk } from "@/types";
interface CollisionStore {
  risk: CollisionRisk | null;
  setRisk: (r: CollisionRisk) => void;
}
export const useCollisionStore = create<CollisionStore>((set) => ({
  risk: null,
  setRisk: (risk) => set({ risk }),
}));
