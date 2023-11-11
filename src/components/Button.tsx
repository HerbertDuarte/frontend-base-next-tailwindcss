import React from "react";

interface ButtonProps {
  theme: "primary" | "secondary" | "danger" | "success" | "warning";
  action?: () => void;
  flat?: boolean;
  dense?: boolean;
  children: React.ReactNode;
}

export default function Button({
  theme,
  action,
  flat,
  dense,
  children,
}: ButtonProps) {
  let classButton;

  const handleClick = (e: any) => {
    e.preventDefault();
    if (action) {
      action();
    }
  };

  if (flat) {
    switch (theme) {
      case "primary":
        classButton = "bg-zinc-50";
        break;
      case "secondary":
        classButton = "bg-blue-50 text-blue-900";
        break;
      case "danger":
        classButton = "bg-red-50 text-red-950";
        break;
      case "success":
        classButton = "bg-green-50 text-green-950";
        break;
      case "warning":
        classButton = "bg-yellow-50 text-yellow-950";
        break;
      default:
        classButton = "bg-zinc-50";
        break;
    }
  } else {
    switch (theme) {
      case "primary":
        classButton = "bg-zinc-600 text-white";
        break;
      case "secondary":
        classButton = "bg-blue-500 text-white";
        break;
      case "danger":
        classButton = "bg-red-500 text-white";
        break;
      case "success":
        classButton = "bg-green-500 text-white";
        break;
      case "warning":
        classButton = "bg-yellow-200 text-yellow-900";
        break;
      default:
        classButton = "bg-zinc-50";
        break;
    }
  }

  if (dense) {
    classButton += " p-1";
  } else {
    classButton += " py-2 px-3";
  }

  return (
    <button
      className={`${classButton} rounded`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
