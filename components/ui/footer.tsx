import Link from "next/link";
import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 flex justify-center">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <p className="text-sm text-muted-foreground text-center">
         
          <span className="font-bold">Solvia</span> © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

