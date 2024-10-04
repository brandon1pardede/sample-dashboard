import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navs } from "@/constants/app";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Aside({ module }: { module: string }) {
  const currentPath = usePathname();

  return (
    <aside className="fixed top-16 bottom-0 left-0 z-10 hidden w-14 flex-col border-r bg-card sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        {navs.map((nav) => {
          const Icon = nav.icon;

          const modifiedPath =
            currentPath.split("/").slice(0, 2).join("/") + "/" + nav.key;

          return (
            <Tooltip key={nav.key}>
              <TooltipTrigger asChild>
                <Link
                  href={modifiedPath}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors md:h-8 md:w-8",
                    module === nav.key &&
                      "bg-secondary text-secondary-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{nav.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{nav.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
