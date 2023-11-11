import { useEffect, useRef } from "react";

interface Props {
  model: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  children: React.ReactNode;
}

export default function Dialog({ model, children } : Props) {
  const [value, setValue] = model;
  const contentRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event : any) {
      if (event.key === "Escape") {
        setValue(false);
      }
    }

    if (value) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setValue, value]);

  useEffect(() => {
    function handleClickOutside(event : any) {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setValue(false);
      }
    }

    if (value) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contentRef, setValue, value]);
  return (
    <div
      className={`transition-colors z-40 ${value ? "bg-black/50 pointer-events-auto" : "pointer-events-none"} w-screen h-screen fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 `}
    >
      <div
        ref={contentRef}
        className={`relative transition-all duration-200 scale-0 overflow-hidden ${
          value && "scale-100"
        } max-w-[90vw] max-h-[85%] bg-white text-zinc-900 m-4 rounded-md`}
      >
        <header className="bg-zinc-200 w-full h-7">
          <button
            className="bg-red-400 hover:bg-red-500 p-2.5 rounded-full absolute right-1 top-1"
            onClick={() => setValue(false)}
          ></button>
        </header>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}
