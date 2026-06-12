import { api } from "./axios";
import { CollisionRisk } from "@/types";
export const collisionService = {
  async getRisk() { return (await api.get<CollisionRisk>("/api/collision")).data; }
};
