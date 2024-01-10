"use client"

import { IconMail, IconMenu2 } from "@tabler/icons-react";
import MobileNavBar from "../ui/mobile-navbar";
import { Dialog } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

const Navbar = () => {

    return (
      <>
      <nav className="z-10 fixed mx-auto border-b bg-[#3a353F] shadow-md w-full">
        <div className="font-bold flex justify-between h-[4rem] items-center text-white text-sm lg:text-lg mx-8 ">
          <a href="#home" className="font-mono px-4 text-5xl flex justify-start items-center font-black ">
            &lt;VL/&gt;
          </a>
          <div className="flex justify-end text-sm">
            <div className="hidden items-center cursor-pointer gap-8 lg:flex">
              <a href="#home" className="hover:text-[#e89e99] transition-all">
                <div data-to-scrollspy-id="home" className="font-bold">Home</div>
              </a>
              <a href="#projects" className="hover:text-[#e89e99] transition-all">
                <div data-to-scrollspy-id="projects" className="font-bold">Projects</div>
              </a>
              <a href="#experience" className="hover:text-[#e89e99] transition-all">
                <div data-to-scrollspy-id="experience" className="font-bold">Experience</div>
              </a>
              <a href="#interests" className="hover:text-[#e89e99] transition-all">
                <div data-to-scrollspy-id="interests" className="font-bold">Interests</div>
              </a>
              <a href="mailto:levesque.vic@gmail.com" className="bg-[#C05850] rounded-3xl p-2">
                <div className="flex flex-row items-center justify-center hover:text-[#e89e99] transition-all gap-1">
                  <IconMail size={25}/>
                  Get in Touch
                </div>
              </a>
            </div>
            <MobileNavBar />
          </div>
        </div>
      </nav>
      </>
    );
}


export default Navbar;
