import { api } from "./axios";
import { TrainStatus } from "@/types";
export const trainService = {
  async getStatus() { return (await api.get<TrainStatus>("/api/train/status")).data; }
};
