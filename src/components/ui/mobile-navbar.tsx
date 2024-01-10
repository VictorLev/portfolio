"use client"

import { Dialog, Transition } from "@headlessui/react";
import { IconMail, IconX } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { Fragment, useState } from "react";


const MobileNavBar = () => {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }


  return (
  <>
    <button onClick={onOpen} className="text-white lg:hidden">
      <IconMenu2 size={30}/>
    </button>
    <Dialog open={open} as="div" className="fixed z-40 lg:hidden" onClose={onClose}>
      <div className="fixed z-40 inset-0 bg-black bg-opacity-25" />
      <div className="fixed z-40 inset-0 flex">
        <Dialog.Panel className="relative text-white ml-auto my-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-[#3a353F] pb-6 shadow-xl">
          <div className="flex items-center justify-end p-4">
            <IconX onClick={onClose} size={25} />
          </div>
          <div className="p-4">
            <nav className="navContainerRef">
              <div className="flex flex-col items-center cursor-pointer gap-8">
                  <a onClick={onClose} href="#home" className="hover:text-[#e89e99] transition-all">
                    <div data-to-scrollspy-id="home" className="font-bold">Home</div>
                  </a>
                  <a onClick={onClose} href="#projects" className="hover:text-[#e89e99] transition-all">
                    <div data-to-scrollspy-id="projects" className="font-bold">Projects</div>
                  </a>
                  <a onClick={onClose} href="#experience" className="hover:text-[#e89e99] transition-all">
                    <div data-to-scrollspy-id="experience" className="font-bold">Experience</div>
                  </a>
                  <a onClick={onClose} href="#interests" className="hover:text-[#e89e99] transition-all">
                    <div data-to-scrollspy-id="interests" className="font-bold">Interests</div>
                  </a>
                  <a href="mailto:levesque.vic@gmail.com" className="bg-[#C05850] rounded-3xl p-2">
                    <div className="flex flex-row items-center justify-center font-bold hover:text-[#e89e99] transition-all gap-1">
                      <IconMail size={25}/>
                      Get in Touch
                    </div>
                  </a>
                </div>
              </nav>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  </>
  );
}
export default MobileNavBar;
