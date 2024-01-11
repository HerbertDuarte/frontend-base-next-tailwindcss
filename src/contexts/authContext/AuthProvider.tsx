"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import { AuthContext } from "./AuthContext";
import Notify from "@/components/assets/Notify";
import { useRouter } from "next/navigation";
import Loader from "@/components/assets/Loader";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useAxios();

  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const router = useRouter();
  /* MODAIS */
  const modelError = useState<boolean>(false);
  const [_, setErrorNotify] = modelError;
  const [error, setError] = useState<string>("");
  const exitNotificationModel = useState<boolean>(false);
  const [exitNotificationMessage, setExitNotificationMessage] = useState<string>("");

  /* LOGIN */
  async function login(data: { username: string; password: string }) {
    setErrorNotify(false);
    setAuthLoading(true);
    try {
      const { username, password } = data;
      const response = await api.post("/auth/login", { username, password });
      setDataLogin(response.data);
    } catch (error: any) {
      setError(error.message);
      setErrorNotify(true);
      console.error(error);
    }
    setAuthLoading(false);
    return;
  }

  /* LOGOUT */
  function logout() {
    setAuthLoading(true);
    setToken("");
    setUser(undefined);
    
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("logout");
    exitNotificationModel[1](true);
    setExitNotificationMessage("Session closed successfully");
    setAuthLoading(false);
    router.push("/");
  }

  async function setDataLogin(data: any) {
    const id = data.usuarioId;
    const { data: userData } = await api.get(`/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });
    setToken(data.access_token);
    setUser(userData);
  }

  useEffect(()=>{
    if(user){
      localStorage.setItem("user", JSON.stringify(user));
    }else{
      localStorage.removeItem("user");
    }
  }, [user])

  useEffect(()=>{
    if(token){
      localStorage.setItem("token", token);
    }else{
      localStorage.removeItem("token");
    }
  }, [token])
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        setUser,
        token,
        setToken,
        error,
        authLoading,
        setAuthLoading,
      }}
    >
      <Notify model={modelError} theme="danger" text={`${error}!`} />
      <Notify model={exitNotificationModel} theme="success" text={`${exitNotificationMessage}!`} />
      
      {authLoading ? <Loader/>  : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
