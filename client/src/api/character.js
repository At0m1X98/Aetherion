import { apiFetch } from "./api";

// Create a new character for the logged-in user
export const createCharacter = async (characterData) => {
  return await apiFetch("/characters", "POST", characterData);
};

// Get the current user's character
export const getCharacter = async () => {
  return await apiFetch("/characters", "GET");
};