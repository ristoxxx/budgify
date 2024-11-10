export async function register(email, password) {
    const response = await fetch("https://budgify-backend-app.vercel.app/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;
  }
  
  export async function login(email, password) {
    const response = await fetch("https://budgify-backend-app.vercel.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.token && data._id) {
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data._id); // Save user ID
    }
    return data;
  }
  
  export function logout() {
    localStorage.removeItem("authToken");
  }
  
  export function getAuthToken() {
    return localStorage.getItem("authToken");
  }

  export function getUserId() {
    return localStorage.getItem("userId");
  }