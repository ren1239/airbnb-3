import { MenuIcon } from "lucide-react";
import Image from "next/image";
import UserIcon from "../../public/person.png";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center gap-x-4">
      <ThemeSelector />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex rounded-full border p-2 lg:py-1 items-center gap-x-2 ">
              <MenuIcon />
              <Image
                src={user ? user?.picture ?? UserIcon : UserIcon}
                alt="usericon"
                className="hidden lg:block rounded-full w-6 h-6 border"
                height={30}
                width={30}
                loading="lazy"
              />
            </div>
          </DropdownMenuTrigger>
          {user ? (
            <>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Welcome Back!</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={""} className="w-full">
                    Airbnb your home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={""} className="w-full">
                    My Favorites
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={""} className="w-full">
                    My Reservations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutLink>Logout</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </>
          ) : (
            <>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Welcome</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <RegisterLink className="w-full"> Register</RegisterLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LoginLink className="w-full">Login</LoginLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </>
          )}
        </DropdownMenu>
      </div>
    </div>
  );
}
