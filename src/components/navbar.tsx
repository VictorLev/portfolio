import Link from "next/link";
import Container from "./ui/container";

const Navbar = () => {

    return (
      <nav className="z-10 fixed mx-auto border-b bg-[#3a353F] shadow-md w-full">
        <div className="relative font-bold flex justify-between h-[4rem] items-center text-white text-sm lg:text-lg mx-8 ">
          <div className="relative font-mono px-4 text-5xl flex justify-start items-center font-black ">
            &lt;VL/&gt;
          </div>
          <div className="relative transition cursor-pointer font-bold px-4 gap-x-4 sm:px-6 lg:px-8 flex justify-end items-center text-sm lg:text-lg ">
            <a href="#home" >
              Home
            </a>
            <a href="/" >
              work
            </a>
            <a href="#about">
              about
            </a>
            <a href="/" >
              blog
            </a>
            <a href="/">
              Get in touch
            </a>
          </div>
        </div>
  </nav>
    );
}


export default Navbar;
