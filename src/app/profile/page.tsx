"use client";
import Button from "@/components/assets/Button";
import Dialog from "@/components/assets/Dialog";
import { useAuth } from "@/contexts/authContext/AuthContext";
import { useAxios } from "@/hooks/useAxios";
import {
  User2Icon,
  LogOutIcon,
  Edit2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const { logout, user, setUser, setAuthLoading, token } = useAuth();
  const api = useAxios();
  const logoutDialog = useState<boolean>(false);
  const router = useRouter();
  const [_, setLogoutDialog] = logoutDialog;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setAuthLoading(true);
    async function updateDataUser() {
      const { data } = await api.get(`/usuarios/${user.id}`);
      setUser(data);
      console.log("updateDataUser");
    }
    try {
      updateDataUser();
    } catch (error) {
      console.log(error);
    }
    setAuthLoading(false);
  }, []);

  return (
    <main className="justify-start items-start p-3">
      <Dialog model={logoutDialog}>
        <h1>Are you sure you want to leave?</h1>
        <div className="w-full flex justify-center gap-2 pt-2">
          <Button action={() => setLogoutDialog(false)} theme="warning">
            Cancel
          </Button>
          <Button action={() => logout()} theme="danger">
            Confirm
          </Button>
        </div>
      </Dialog>
      <div className="flex justify-between w-full flex-row">
        <div onClick={() => router.push("/profile/edit")} className="flex justify-center items-start gap-2">
          <div className="bg-zinc-400 md:p-4 p-3 flex justify-center items-center rounded-full">
            <User2Icon size={45} />
          </div>
          <div className="py-2">
            <h1 className="md:text-2xl text-xl font-bold flex items-center gap-2">
              <span className="truncate max-w-[10ch] xs:max-w-[20ch] sm:max-w-30ch">{user.nome}</span>
              <span
                className="cursor-pointer"
              >
                <Edit2Icon size={20} strokeWidth={3} />
              </span>
            </h1>
            <p className="md:text-lg text-md">{user.email}</p>
          </div>
        </div>
        <div>
          <Button action={() => setLogoutDialog(true)}>
            <p className="flex flex-nowrap items-center gap-2 sm:py-0 py-3">
              <span className="sm:block hidden">Logout</span>
              <LogOutIcon className="sm:scale-100 scale-125" size={18} />
            </p>
          </Button>
        </div>
      </div>
    </main>
  );
}
