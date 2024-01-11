"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/contexts/authContext/AuthContext";
import Login from "@/components/login/page";
import Layout from "@/components/Layouts/MainLayout";
import Loader from "@/components/assets/Loader";

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, user, authLoading, setToken } = useAuth();
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const dataUser = JSON.parse(localStorage.getItem("user") as string | any);
      setUser(dataUser);
    }
    if (localStorage.getItem("token")) {
      const dataToken = localStorage.getItem("token") as string | any;
      setToken(dataToken);
    }
    setLoading(false);
  }, [authLoading, setUser, setToken]);

  return (
    <>{ loading ? <Loader /> :  user ? <Layout>{children}</Layout> :  <Login />}</>
  );
}
