"use client";
import { useState } from "react";
import Dialog from "../assets/Dialog";
import Button from "../assets/Button";
import { LucideIceCream } from "lucide-react";

export default function HomePage() {
  const dialog = useState(false);

  function openDialog() {
    dialog[1](true);
  }
  return (
    <main>
      <div>HomePage</div>
      <Dialog model={dialog}>
        <div className="flex flex-col justify-center items-center gap-3">
          <p>Tem certeza de que deseja executar essa ação?</p>
          <div className="space-x-2">
            <Button theme="danger">sim, executar</Button>
            <Button theme="warning">não, cancelar</Button>
          </div>
        </div>
      </Dialog>
      <Button theme="secondary" dense action={openDialog}>
        <LucideIceCream strokeWidth={1.4} />
      </Button>
    </main>
  );
}
