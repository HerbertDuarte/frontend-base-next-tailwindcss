import React from "react";

export default function Button({ theme, action, children }) {
  let classButton;

  const handleClick =(e)=>{
    e.preventDefault()
    if(action){
      action()
    }
  }

  switch (theme) {
    case "primary":
      classButton = "bg-zinc-300";
      break;
    case "secondary":
      classButton = "bg-blue-400 text-white";
      break;
    case "danger":
      classButton = "bg-red-300 text-red-950/90";
      break;
    case "success":
      classButton = "bg-green-300 text-green-950/90";
      break;
    case "warning":
      classButton = "bg-yellow-100 text-yellow-950/90";
      break;
    default:
      classButton = "bg-zinc-300";
      break;
  }

  return (
    <button className={`${classButton}  p-2 rounded`} onClick={handleClick}>
      {children}
    </button>
  );
}
