"use client";

import React, { useState, useEffect } from "react";
import FormButton from "./FormButton";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "@/contexts/authContext/AuthContext";
import Notify from "../assets/Notify";

export default function FormLogin() {
  const { login } = useAuth();
  const [seePassword, setSeePassword] = useState(false);
  const model = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const showHidePass = (e: any) => {
    e.preventDefault();
    setSeePassword((prev) => !prev);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    login(form);
  }

  function handleRegister() {
    model[1](true);
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start p-3">
      <Notify text="Register" model={model} />
      <label htmlFor="email">Usuário</label>
      <input
        className="bg-zinc-300 p-2 rounded w-full"
        id="email"
        type="text"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <div className="relative w-full">
        <input
          className="bg-zinc-300 p-2 pr-9 rounded w-full"
          id="password"
          type={seePassword ? "text" : "password"}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <span
          className="absolute cursor-pointer text-zinc-700 top-2 right-2"
          onClick={showHidePass}
        >
          {seePassword ? (
            <EyeIcon size="1.4rem" />
          ) : (
            <EyeOffIcon size="1.4rem" />
          )}
        </span>
      </div>

      <div className="flex w-full justify-end gap-3 mt-4">
        <FormButton action={handleRegister} theme="danger">
          Register
        </FormButton>
        <FormButton submit theme="success">
          Login
        </FormButton>
      </div>
    </form>
  );
}
