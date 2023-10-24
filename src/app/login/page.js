"use client";
import React, { useState } from "react";
import Notify from "@/components/Notify";
import Button from "@/components/Button";
import { Eye, EyeIcon, EyeOffIcon } from "lucide-react";

export default function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const notify = useState(null);

  const showHidePass = (e) => {
    e.preventDefault();
    setSeePassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    notify[1](true);
  };

  return (
    <main className="p-3 min-h-flex flex justify-center items-center">
      <Notify model={notify} theme="" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat eum voluptates eius minima cupiditate." />
      <div className="h-fit w-full max-w-[600px] p-3 border-2 border-zinc-300 rounded-lg">
        <h1 className="text-center text-2xl font-medium">Login</h1>
        <form className="flex flex-col items-start p-3">
          <label htmlFor="email">Email</label>
          <input
            className="bg-zinc-300 p-2 rounded w-full"
            id="email"
            type="text"
          />

          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              className="bg-zinc-300 p-2 pr-9 rounded w-full"
              id="password"
              type={seePassword ? "text" : "password"}
            />
            <button className="absolute text-zinc-700 top-2 right-2" onClick={showHidePass}>
              {seePassword ? <EyeIcon size="1.4rem" /> : <EyeOffIcon size="1.4rem" />}
            </button>
          </div>

          <div className="flex w-full justify-end gap-3 mt-4">
            <Button theme="danger">
              Register
            </Button>
            <Button theme="success" action={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
