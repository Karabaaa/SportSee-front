const API_URL = "http://localhost:3000";

export async function fetchUser(id) {
  const response = await fetch(`${API_URL}/user/${id}`);
  if (!response.ok) {
    return null;
  }
  const json = await response.json();
  return json.data;
}

export async function fetchUserActivity(id) {
  const response = await fetch(`${API_URL}/user/${id}/activity`);
  if (!response.ok) {
    return null;
  }
  const json = await response.json();
  return json.data;
}

export async function fetchUserAverageSessions(id) {
  const response = await fetch(`${API_URL}/user/${id}/average-sessions`);
  if (!response.ok) {
    return null;
  }
  const json = await response.json();
  return json.data;
}

export async function fetchUserPerformance(id) {
  const response = await fetch(`${API_URL}/user/${id}/performance`);
  if (!response.ok) {
    return null;
  }
  const json = await response.json();
  return json.data;
}
