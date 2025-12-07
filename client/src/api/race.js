import { apiFetch } from "./api";

export const getRaces = async () => {
  return await apiFetch("/races", "GET");
};