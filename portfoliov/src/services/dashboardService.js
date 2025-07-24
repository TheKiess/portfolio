const BASE_URL = 'http://localhost:5000/api/dashboard';

export async function getDashboardData() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar dados do dashboard');
  }

  return await response.json();
}