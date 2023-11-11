import { AlertCircleIcon, BellIcon, CheckCircleIcon, XIcon } from "lucide-react";
import React, { useEffect,Dispatch,SetStateAction } from "react";

interface NotifyProps {
  model: [boolean, Dispatch<SetStateAction<boolean>>];
  text: string;
  theme?: "success" | "danger" | "warning" | "info";
  timeout?: number;
}

export default function Notify({ model, text ='', theme, timeout } : NotifyProps) {
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
    <div>
      {text && (
        <div
          className={`fixed max-w-[95%] sm:max-w-[90%] md:max-w-2xl z-50 transition-transform transform top-4 right-[50%] translate-x-[50%] flex flex-nowrap items-center justify-center px-4 py-2 rounded-md ${themeClass} ${textColor} transition-transform transform ${!notify && "translate-y-[-200%]"}`}
        >
          {icon && <div className="mr-4">{icon()}</div>}
          <p className="w-max">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
