"use client";

import { ReactNode, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import { AuthContext } from "./AuthContext";
import Notify from "@/components/Notify";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const api = useAxios();
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>("");
  const modelError = useState<boolean>(false);
  const [_, setErrorNotify] = modelError;
  const [error, setError] = useState<string>("");
  const modelSuccess = useState<boolean>(false);
  const [__, setSuccessNotify] = modelSuccess;
  const [success, setSuccess] = useState<string>("");
  async function login(data: { username: string; password: string }) {
    setErrorNotify(false);
    setSuccessNotify(false);
    try {
      const { username, password } = data;
      const response = await api.post("/auth/login", { username, password });
      setToken(response.data.access_token);
      const id = response.data.usuarioId;
      const {data : userData} = await api.get(`/usuarios/${id}`, {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      });
      setUser(userData);
      console.log(userData)
      setSuccessNotify(true);
      setSuccess("Login efetuado com sucesso");
      console.log(response.data);
    } catch (error: any) {
      setError(error.response.data.message);
      setErrorNotify(true);
      console.error(error);
    }
  }

  function logout() {
    console.log("logout");
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, user, setUser, token, error }}
    >
      <Notify model={modelError} theme="danger" text={`${error}!`} />
      <Notify model={modelSuccess} theme="success" text={`${success}!`} />
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
