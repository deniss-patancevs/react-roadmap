const API_URL = "http://localhost:3001";

export async function api<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
