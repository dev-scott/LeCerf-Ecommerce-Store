import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between ">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">LeCerf</p>
          </Link>
          <MainNav data={categories} />
          <div className="flex" >
            <div className="mr-2">

            <ThemeToggle />
            </div>
          <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
