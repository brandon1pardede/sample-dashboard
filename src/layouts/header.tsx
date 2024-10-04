import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleDotDashed } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";

export function Header() {
  const { user, org } = useAppSelector((s) => s.auth);

  return (
    <header className="fixed w-full top-0 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 z-10">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Avatar>
          <AvatarImage src={org.avatar} alt="high-quality-avatar" />
          <AvatarFallback>{getNameAbbrv(org.displayName)}</AvatarFallback>
        </Avatar>
        <span className="whitespace-nowrap">{org.displayName}</span>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto"></div>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <CircleDotDashed size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Status</DropdownMenuItem>
            <DropdownMenuItem>Community</DropdownMenuItem>
            <DropdownMenuItem>Knowledge Base</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} alt="high-quality-user-avatar" />
                <AvatarFallback>
                  {getNameAbbrv(user.displayName)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function getNameAbbrv(name: string) {
  return name
    .split(" ")
    .map((d) => d[0])
    .filter(Boolean)
    .join("");
}
