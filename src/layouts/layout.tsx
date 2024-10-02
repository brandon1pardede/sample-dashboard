import { ReactNode } from "react";
import { Header } from "./header";
import { Aside } from "./aside";
import { cn } from "@/lib/utils";

export function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Aside />
      <main className={cn("pt-24 px-4 lg:px-24 min-h-screen", className)}>
        {children}
      </main>
    </div>
  );
}
