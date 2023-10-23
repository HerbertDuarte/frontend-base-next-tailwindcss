"use client";
import { useState } from "react";
import Dialog from "./Dialog";

export default function HomePage() {
  const dialog = useState(false);

  function openDialog() {
    dialog[1](true);
  }
  return (
    <>
      <div>HomePage</div>
      <Dialog model={dialog}>
        <div className="flex flex-col justify-center items-center gap-3">
          <p>Tem certeza de que deseja executar essa ação?</p>
          <div className="space-x-2">
            <button className="bg-green-400 p-3 rounded">Sim, executar</button>
            <button className="bg-red-400 p-3 rounded">Não, cancelar</button>
          </div>
        </div>
      </Dialog>
      <button className="p-2 m-2 rounded bg-blue-200" onClick={openDialog}>
        Click me
      </button>
    </>
  );
}
