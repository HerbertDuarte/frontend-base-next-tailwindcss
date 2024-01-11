import { useAuth } from "@/contexts/authContext/AuthContext";
import axios from "axios";

export const useAxios = () => {
  const { token } = useAuth();
  if(token){
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return api;
  }else{
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL
    });
    return api
  }
};
