import Link from "next/link";
import ProfileImage from "@/components/profile-image";
import Container from "@/components/ui/container";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import About from "@/components/bodysection/about";

interface WelcomeProps {
  id: string;
}

const Welcome = ({
  id
}:WelcomeProps) => {
  return (
    <div id={id}>
      <div className="flex items-center sm:h-screen">
        <Container>
          <div className="relative flex flex-col justify-between">
            <div className=" flex flex-col-reverse justify-between items-center lg:flex-row lg:h-[45rem]">
                <div className="flex flex-col mt-8 lg:m-0">
                  <div className="flex text-[#3a353F] w-full font-bold text-6xl my-4 text-center leading-tight justify-center lg:justify-normal lg:text-left">
                    Software engineer
                  </div>
                  <div className="text-lg text-[#797b82] font-medium text-center justify-center px-8 lg:p-0 lg:pr-8 lg:justify-normal lg:text-left">
                    Hi, I&apos;m Victor Levesque. Electronic engineer by training and software engineer by passion based in Melbourne. 🇦🇺
                  </div>
                  <div className="flex mx-4 my-8 gap-4 justify-center lg:justify-normal">
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" href="https://www.linkedin.com/in/victor-l%C3%A9vesque-p-eng/" target="_blank" rel="noreferrer noopener">
                      <IconBrandLinkedin size={36}/>
                    </a>
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" href="https://github.com/VictorLev" target="_blank" rel="noreferrer noopener">
                      <IconBrandGithub size={36}/>
                    </a>
                  </div>
                </div>
                <div className="">
                  <ProfileImage/>
                </div>
            </div>
            <div className="w-full flex flex-col items-center lg:flex-row lg:absolute lg:left-0 lg:bottom-0">
                  <div className="text-lg text-[#3a353F] border-b-2 border-[#797b82] lg:border-b-0  font-medium lg:pr-12 lg:border-r-2 lg:border-[#797b82]">
                    Competencies
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-2 text-md my-4 text-[#797b82] text-center font-medium sm:m-0 sm:grid-cols-4 sm:flex-row sm:gap-x-4  lg:m-auto lg:px-4  lg:justify-center lg:items-center">
                    <div>
                      Web Development
                    </div>
                    <div>
                      Project Management
                    </div>
                    <div>
                      Client relations
                    </div>
                    <div>
                      Communication and Teamwork
                    </div>
                  </div>

            </div>
          </div>
        </Container>
      </div>
      <About />
    </div>
     );
}



export default Welcome;
