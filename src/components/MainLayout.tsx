"use client";

import { HelpCircleIcon, HomeIcon, FlameIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Layout({ children } : { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { windowWidth } = useScreenWidth();
  const drawerRef = useRef(null);
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
      name: "Logout",
      path: "/logout",
      icon: () => <HelpCircleIcon />,
    },
  ];
  function handleMenu() {
    setIsOpen((prev) => !prev);
  }


  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event : any) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="z-40 fixed text-white top-0 bg-primary w-full flex justify-between p-3">
        <div className="flex gap-2 flex-nowrap">
          <FlameIcon />
          App Name
        </div>
        {windowWidth > 600 ? (
          <nav 
          className="flex flex-row flex-nowrap justify-center items-center gap-4 mx-3">
            {RouterLinks.map((item, index) => (
              <Link
                className={`flex justify-center items-center gap-1 ${
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
          <div ref={drawerRef}>
            <MenuIcon
              className="cursor-pointer"
              onClick={handleMenu}
              strokeWidth={1.5}
            />

            <div
              className={`absolute z-50 right-0 top-12 min-h-flex bg-primary transition-transform transform h-screen ${
                !isOpen && "translate-x-full"
              } w-[260px]`}
            >
              <nav

                className={`flex flex-col justify-center items-center gap-2 py-4 min-w-[260px]`}
              >
                {RouterLinks.map((item, index) => (
                  <Link
                    onClick={closeMenu}
                    className={`flex justify-center items-center gap-1 ${
                      pathname === item.path ? "text-blue-300" : "text-white"
                    }`}
                    key={index}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="min-h-flex w-full flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
