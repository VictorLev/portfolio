import Link from "next/link";
import Container from "./ui/container";

const Navbar = () => {

    return (
      <div className="mx-auto border-b bg-white shadow-md overflow-auto">
      <Container>
          <div className="relative font-bold flex justify-between text-black text-sm lg:text-lg">
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 justify-start items-center   ">
                Test
            </div>
            <div className="relative font-bold px-4 sm:px-6 lg:px-8 flex h-16 justify-end items-center text-sm lg:text-lg ">
                <Link href="/" className="ml-4 gap-x-2 ">
                  home
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  work
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  personal
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  blog
                </Link>

            </div>
          </div>
      </Container>
  </div>
    );
}


export default Navbar;
