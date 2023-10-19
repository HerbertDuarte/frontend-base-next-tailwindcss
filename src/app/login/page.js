"use client";
import React, { useState } from "react";

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const showHidePass = (e) => {
    e.preventDefault();
    setSeePassword((prev) => !prev);
  };

  return (
    <main className="p-4 min-h-flex flex justify-center items-center">
      <div className="h-fit w-full max-w-[600px] px-3 py-6 border-2 border-zinc-300 rounded-lg">
        <h1 className="text-center text-2xl py-3 font-medium">Login</h1>
        <form className="flex flex-col items-start gap-4 p-3">
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              className="bg-zinc-300 p-2 rounded w-full"
              id="email"
              type="text"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password">Password</label>
            <input
              className="bg-zinc-300 p-2 rounded w-full"
              id="password"
              type={seePassword ? "text" : "password"}
            />
            <button onClick={showHidePass}>
              {seePassword ? "Ocultar senha" : "Mostrar senha"}
            </button>
          </div>

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
