import Link from "next/link";
import Image from "next/image";
import largeLogo from "../../public/airbnb-desktop.png";
import smallLogo from "../../public/airbnb-mobile.webp";
import { Button } from "@/components/ui/button";
import { UserNav } from "./UserNav";

export function NavBar() {
  return (
    <nav className="flex justify-between px-5 py-5 lg:px-10 border-b">
      <div>
        <Link href={"/"}>
          <Image
            src={largeLogo}
            alt={"logo"}
            className="hidden lg:block w-32"
          />
          <Image
            src={smallLogo}
            alt={"logo"}
            className="block lg:hidden w-16"
          />
        </Link>
      </div>
      <div>
        <Button className="rounded-full">Search</Button>
      </div>
      <UserNav />
    </nav>
  );
}
