export const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

if (!API_KEY) {
  console.error("❌ API ключът не е намерен! Провери .env файла.");
}
