import React from "react";

interface ButtonProps {
  theme?: "primary" | "secondary" | "danger" | "success" | "warning";
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
        classButton = "bg-primary-light text-primary";
        break;
      case "secondary":
        classButton = "bg-blue-100 text-blue-900";
        break;
      case "danger":
        classButton = "bg-red-100 text-red-950";
        break;
      case "success":
        classButton = "bg-green-100 text-green-950";
        break;
      case "warning":
        classButton = "bg-yellow-100 text-yellow-950";
        break;
      default:
        classButton = "bg-zinc-200";
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
        classButton = "bg-zinc-400";
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
      className={`${classButton} rounded hover:opacity-90 transition-opacity`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
