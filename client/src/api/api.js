const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  console.log("API Base URL:", API_BASE);

export const apiFetch = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(`${API_BASE}${endpoint}`, options);
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "API error");
  return data;
};
