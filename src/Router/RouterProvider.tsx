"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext/AuthContext";
import Login from "@/app/login/page";
import Layout from "@/components/MainLayout";
import Loader from "@/components/Loader";

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, user, authLoading, setAuthLoading } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const dataUser = JSON.parse(localStorage.getItem("user") as string);
      setUser(dataUser);
    }
    setAuthLoading(false);
  }, []);

  return <>
    {authLoading ? <Loader/> : ( user ? <Layout>{children}</Layout> : <Login />)}
  </>;
}
