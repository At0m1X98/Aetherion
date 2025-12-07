import { apiFetch } from "./api";

export const getClasses = async () => {
  return await apiFetch("/classes", "GET");
};