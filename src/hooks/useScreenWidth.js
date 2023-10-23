import { useState, useEffect } from "react";

export default function useScreenWidth(){
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Limpar o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    windowWidth,
    setWindowWidth,
  }
}