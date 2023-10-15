"use client";

import { HelpCircleIcon, HomeIcon, AppleIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const drawerW = '260'
  const { windowWidth } = useScreenWidth();
  const RouterLinks = [
    {
      name: "Home",
      path: "/",
      icon: () => <HomeIcon />,
    },
    {
      name: "About",
      path: "/about",
      icon: () => <HelpCircleIcon />,
    },
    {
      name: "Login",
      path: "/login",
      icon: () => <HelpCircleIcon />,
    },
  ];
  function openMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <header className="bg-zinc-300 w-full flex justify-between p-3">
        <div className="flex gap-2 flex-nowrap">
          <AppleIcon />
          App Name
        </div>
        {windowWidth > 600 ? (
          <nav className="flex flex-row flex-nowrap justify-center items-center gap-2">
            {RouterLinks.map((item, index) => (
              <Link
                className={`flex justify-center items-center gap-1 font-medium ${
                  pathname === item.path ? "text-blue-600" : ""
                }`}
                key={index}
                href={item.path}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        ) : (
          <>
            <MenuIcon
              className="cursor-pointer"
              onClick={openMenu}
              strokeWidth={1.5}
            />
            <div
              className={`absolute right-0 top-12 min-h-flex bg-zinc-300 transition-transform transform ${ !isOpen && "translate-x-full"} w-[${drawerW}px]`}
            >
              <nav
                className={`flex flex-col justify-center items-center gap-2 py-4 min-w-[${drawerW}px]`}
              >
                {RouterLinks.map((item, index) => (
                  <Link
                    className={`flex justify-center items-center gap-1 font-medium ${
                      pathname === item.path ? "text-blue-600" : ""
                    }`}
                    key={index}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </header>
      <main className="min-h-flex w-full flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
