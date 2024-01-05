"use client"

const Navbar = () => {

    return (
      <nav className="z-10 fixed mx-auto border-b bg-[#3a353F] shadow-md w-full">
        <div className="relative font-bold flex justify-between h-[4rem] items-center text-white text-sm lg:text-lg mx-8 ">
          <div className="relative font-mono px-4 text-5xl flex justify-start items-center font-black ">
            &lt;VL/&gt;
          </div>
          <div className="relative flex cursor-pointer gap-8 justify-end items-center text-sm lg:text-md">
            <a href="#home" className="hover:text-[#e89e99] transition-all">
              <div data-to-scrollspy-id="home" className="font-bold">Home</div>
            </a>
            <a href="#projects" className="hover:text-[#e89e99] transition-all">
              <div data-to-scrollspy-id="projects" className="font-bold">Projects</div>
            </a>
            <a href="#experience" className="hover:text-[#e89e99]  transition-all">
              <div data-to-scrollspy-id="experience" className="font-bold">Experience</div>
            </a>
            <a href="#interests" className="hover:text-[#e89e99] transition-all">
              <div data-to-scrollspy-id="interests" className="font-bold">Interests</div>
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
