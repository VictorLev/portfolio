import Link from "next/link";
import Container from "./ui/container";

const Navbar = () => {

    return (
      <div className="fixed mx-auto border-b bg-white shadow-md w-full">
      <Container>
          <div className="relative font-bold flex justify-between h-16 text-black text-sm lg:text-lg">
            <div className="relative px-4 text-2xl flex justify-start items-center   ">
              &lt;VL /&gt;
            </div>
            <div className="relative font-bold px-4 sm:px-6 lg:px-8 flex h-16 justify-end items-center text-sm lg:text-lg ">
                <Link href="/" className="ml-4 gap-x-2 ">
                  home
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  work
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  about
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  blog
                </Link>
                <Link href="/" className="ml-4 gap-x-2 ">
                  Get in touch
                </Link>
            </div>
          </div>
      </Container>
  </div>
    );
}


export default Navbar;
