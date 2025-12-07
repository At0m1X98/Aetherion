import { apiFetch } from "./api";

export const registerUser = async (userData) => {
	return await apiFetch('/users/register', 'POST', userData);
};

export const loginUser = async (userData) => {
	return await apiFetch('/users/login', 'POST', userData);
};

export const getUsers = async () => {
  	return await apiFetch('/users', 'GET');
};