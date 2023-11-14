"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext/AuthContext";
import Login from "@/components/login/page";
import Layout from "@/components/Layouts/MainLayout";
import Loader from "@/components/assets/Loader";

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, user, authLoading, setAuthLoading, setToken } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const dataUser = JSON.parse(localStorage.getItem("user") as string | any);
      setUser(dataUser);
    }
    if (localStorage.getItem("token")) {
      const dataToken = localStorage.getItem("token") as string | any;
      setAuthLoading(true);
      setToken(dataToken);
    }
    setAuthLoading(false);
  }, [setAuthLoading, setToken, setUser]);

  return (
    <>
      {authLoading ? (
        <Loader />
      ) : user ? (
        <Layout>{children}</Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
