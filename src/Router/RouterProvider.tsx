"use client";

import React from "react";
import { useAuth } from "@/contexts/authContext/AuthContext";
import Login from "@/app/login/page";
import Layout from "@/components/MainLayout";
export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  return <>{user ? <Layout>{children}</Layout> : <Login />}</>;
}
