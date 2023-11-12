"use client";

import { ReactNode, useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import { AuthContext } from "./AuthContext";
import Notify from "@/components/Notify";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useAxios();

  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  /* MODAIS */
  const modelError = useState<boolean>(false);
  const [_, setErrorNotify] = modelError;
  const [error, setError] = useState<string>("");

  /* LOGIN */
  async function login(data: { username: string; password: string }) {
    setErrorNotify(false);
    setAuthLoading(true);
    try {
      const { username, password } = data;
      const response = await api.post("/auth/login", { username, password });
      setDataLogin(response.data);
    } catch (error: any) {
      setError(error.response.data.message);
      setErrorNotify(true);
      console.error(error);
    }
    setAuthLoading(false);
  }

  /* LOGOUT */
  function logout() {
    setAuthLoading(true)
    setToken('')
    setUser(undefined)
    setAuthLoading(false)
    
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    console.log('logout')
  }

  async function setDataLogin(data: any) {
    
    const id = data.usuarioId;
    
    const {data : userData} = await api.get(`/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });
    setToken(data.access_token);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", data.access_token);
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, user, setUser, token, error, authLoading, setAuthLoading }}
    >
      <Notify model={modelError} theme="danger" text={`${error}!`} />
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
