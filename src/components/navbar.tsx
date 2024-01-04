import Link from "next/link";
import Container from "./ui/container";

const Navbar = () => {

    return (
      <nav className="z-10 fixed mx-auto border-b bg-[#3a353F] shadow-md w-full">
        <div className="relative font-bold flex justify-between h-[4rem] items-center text-white text-sm lg:text-lg mx-8 ">
          <div className="relative font-mono px-4 text-5xl flex justify-start items-center font-black ">
            &lt;VL/&gt;
          </div>
          <div className="relative flex cursor-pointer font-bold gap-8 justify-end items-center text-sm lg:text-md ">
            <a href="#home" >
              Home
            </a>
            <a href="#projects">
              Projects
            </a>
            <a href="#experience">
              Experience
            </a>
            <a href="#about">
              Personal Interests
            </a>
            <a href="#">
              Get in Touch Button
            </a>
          </div>
        </div>
  </nav>
    );
}


export default Navbar;
