import { ENV } from "@vishal/config";
import axios from "axios";

export const api = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true,
});
