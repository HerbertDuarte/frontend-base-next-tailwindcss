import { AlertCircleIcon, Bell, BellIcon, CheckCircleIcon, XIcon } from "lucide-react";
import React, { useEffect } from "react";

export default function Notify({ model, text, theme, timeout }) {
  let themeClass;
  let textColor;
  let icon

  const [notify, setNotify] = model;

  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        setNotify(false);
      }, timeout || 3500);
    }
  }, [notify, setNotify, timeout]);

  switch (theme) {
    case "success":
      themeClass = "bg-green-300";
      textColor = "text-green-800";
      icon = () => <CheckCircleIcon/>
      break;
    case "danger":
      themeClass = "bg-red-300";
      textColor = "text-red-800";
      icon = () => <XIcon/>
      break;
    case "warning":
      themeClass = "bg-yellow-300";
      textColor = "text-yellow-800";
      icon = () => <AlertCircleIcon/>
      break;
    default:
      themeClass = "bg-blue-300";
      textColor = "text-blue-800";
      icon = () => <BellIcon strokeWidth={1.4}/>
  }

  return (
    <>
      {text && (
        <div
          className={`fixed transition-transform transform top-4 flex items-center justify-center px-4 py-2 rounded-md ${themeClass} ${textColor} transition-transform transform ${
            !notify && "translate-y-[-140%]"
          }`}
        >
          {icon && <div className="mr-2">{icon()}</div>}
          <div>{text}</div>
        </div>
      )}
    </>
  );
}
