import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://health-insurance-premium-prediction-whj6.onrender.com",
});

export const predictPremium = async (data) => {
  const response = await api.post(
    "/api/v1/predict",
    data
  );

  return response.data;
};

export default api;