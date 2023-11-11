import { useAuth } from "@/contexts/authContext/AuthContext";
import axios from "axios";

export const useAxios = () => {
  const { token } = useAuth();
  if(token){
    const api = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return api;
  }else{
    const api = axios.create({
      baseURL: "http://localhost:3333"
    });
    return api
  }
};
