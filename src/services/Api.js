import axios from "axios";

// URL de desenvolvimento e produção
const API_BASE_URL = process.env.NODE_ENV === "production"
  ? "https://api-imobiexpress-production.up.railway.app" // ✅ URL pública do Railway
  : "http://localhost:8000"; // 🔧 Localhost para desenvolvimento local

const Api = axios.create({
  baseURL: API_BASE_URL
});

export default Api;
export const urlApi = API_BASE_URL;
