import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/chat/message`;

export const sendMessage = async (
  message,
  conversationId = null
) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      API_URL,
      {
        message,
        conversationId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;

  } catch (error) {
    console.error("❌ Chat API Error:", error);
    throw error;
  }
};