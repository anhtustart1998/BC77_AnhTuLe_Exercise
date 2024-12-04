import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
