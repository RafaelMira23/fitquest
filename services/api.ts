const API_BASE_URL = "https://";
/* Change to URL on deployment */

export async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro na requisição get");
  }
  return response.json();
}

export async function post<T>(endpoint: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro na requisição post");
  }
  return response.json();
}
