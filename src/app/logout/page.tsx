"use client";

import Button from "@/components/Button";
import { useAuth } from "@/contexts/authContext/AuthContext";
import React from "react";
import { useRouter } from "next/navigation";
export default function Logout() {
  const router = useRouter();
  const { logout } = useAuth();

  function handleClick() {
    logout();
  }

  return (
    <main className="flex justify-center items-center flex-col gap-3">
      <h1 className="text-center">Are you sure you want to leave?</h1>
      <div className="space-x-2">
        <Button flat theme="warning" action={()=> router.back()}>
          Cancel
        </Button>
        <Button flat theme="danger" action={handleClick}>
          Logout
        </Button>
      </div>
    </main>
  );
}
