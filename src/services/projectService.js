import { getAuthToken, getUserId } from "./authService";

export async function createProject(name, description, type, budget, timelimit) {
  try {
    const token = getAuthToken();
    const userId = getUserId(); // Retrieve the user ID

    if (!token || !userId) throw new Error("Authentication or user ID missing");

    const response = await fetch("https://budgify-backend-app.vercel.app/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name, description, type, budget, timelimit, owner: userId })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Failed to create project:", error.message);
    throw error;
  }
}
