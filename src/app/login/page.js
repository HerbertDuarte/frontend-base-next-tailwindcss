"use client";
import React, { useState } from "react";
import Notify from "@/components/Notify";

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const notify = useState(null);

  const showHidePass = (e) => {
    e.preventDefault();
    setSeePassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify[1](true);
  };

  return (
    <main className="p-3 min-h-flex flex justify-center items-center">
      <Notify model={notify}  text="Submit" />
      <div className="h-fit w-full max-w-[600px] p-3 border-2 border-zinc-300 rounded-lg">
        <h1 className="text-center text-2xl font-medium">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-start p-3">
          <label htmlFor="email">Email</label>
          <input
            className="bg-zinc-300 p-2 rounded w-full"
            id="email"
            type="text"
          />

          <label htmlFor="password">Password</label>
          <input
            className="bg-zinc-300 p-2 rounded w-full"
            id="password"
            type={seePassword ? "text" : "password"}
          />
          <button onClick={showHidePass}>
            {seePassword ? "Ocultar senha" : "Mostrar senha"}
          </button>

          <div className="flex w-full justify-end gap-3">
            <input
              className="p-2 rounded bg-zinc-300"
              type="submit"
              value="Cadastrar"
            />
            <input
              className="p-2 rounded bg-zinc-300"
              type="submit"
              value="Entrar"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
