"use client";

import FormButton from "@/components/assets/FormButton";
import Button from "@/components/assets/Button";
import React from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();
  return (
    <main className="sm:p-3 p-2">
      <h1 className="text-2xl text-center">Edit your profile</h1>
      <form className="max-w-xl w-full flex flex-col gap-1 p-3 m-3 border-[3px] border-zinc-200 rounded-xl">
        <label className="w-full">
          <p className="pl-1">name</p>
          <input
            className="bg-zinc-200 p-2 rounded w-full"
            type="text"
            value={"empty input"}
          />
        </label>
        <label className="w-full">
          <p className="pl-1">email</p>
          <input
            className="bg-zinc-200 p-2 rounded w-full"
            type="text"
            value={"empty input"}
          />
        </label>
        <label className="w-full">
          <p className="pl-1">password</p>
          <input
            className="bg-zinc-200 p-2 rounded w-full"
            type="text"
            value={"empty input"}
          />
        </label>
        <label className="w-full">
          <p className="pl-1">confirm password</p>
          <input
            className="bg-zinc-200 p-2 rounded w-full"
            type="text"
            value={"empty input"}
          />
        </label>
        <label className="w-full">
          <p className="pl-1">old password</p>
          <input
            className="bg-zinc-200 p-2 rounded w-full"
            type="text"
            value={"empty input"}
          />
        </label>
        <div className="flex justify-end py-2 gap-2">
          <Button action={()=> router.back()}>Cancel</Button>
          <FormButton theme="success">save</FormButton>
        </div>
      </form>
    </main>
  );
}
