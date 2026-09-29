import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// Register
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API}/api/auth/register`,
    userData
  );

  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API}/api/auth/login`,
    userData
  );

  return response.data;
};

// Profile
export const getProfile = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API}/api/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};