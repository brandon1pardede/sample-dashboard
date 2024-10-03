"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Aside } from "./aside";
import { Header } from "./header";

export function Layout({
  children,
  className,
  module,
}: {
  children: ReactNode;
  className?: string;
  module: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Aside module={module} />
      <main className={cn("pt-24 pb-8 px-4 lg:px-24 min-h-screen", className)}>
        {children}
      </main>
    </div>
  );
}
