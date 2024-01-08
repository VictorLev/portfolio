import Link from "next/link";
import ProfileImage from "../ui/profile-image";
import Container from "../ui/container";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import About from "./about";

interface WelcomeProps {
  id: string;
}

const Welcome = ({
  id
}:WelcomeProps) => {
  return (
    <div id={id} className="">
      <div className="h-screen">
        <Container>
          <div className="relative flex  flex-col h-[42rem] align-center justify-center items-center">
            <div className="relative flex gap-x-32 justify-center items-center">
              <div className="relative flex flex-col max-w-4xl">
                <div className="block text-[#3a353F] font-bold text-6xl my-4 leading-tight">
                  Software engineer
                </div>
                <div className="pr-8 text-lg text-[#797b82] font-medium">
                  Hi, I&apos;m Victor Levesque. An Electronic Engineer by training and Software Engineer by passion based in Melbourne. 🇦🇺
                </div>
                <div className="flex mx-4 my-8 gap-4">
                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" href="https://www.linkedin.com/in/victor-l%C3%A9vesque-p-eng/" target="_blank" rel="noreferrer noopener">
                    <IconBrandLinkedin size={36}/>
                  </a>
                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" href="https://github.com/VictorLev" target="_blank" rel="noreferrer noopener">
                    <IconBrandGithub size={36}/>
                  </a>
                </div>
              </div>
              <div>
                <ProfileImage/>
              </div>
            </div>
            <div className="absolute w-full left-0 bottom-0 flex flex-row items-center my-8">
              <div className="text-lg text-[#3a353F] font-medium pr-12 border-r-2 border-[#797b82]">
                Competencies
              </div>
              <div className="m-auto px-4 flex justify-center items-center">
                <div className="flex flex-row gap-x-4 text-md text-[#797b82] font-medium">
                  <div>
                  Web Development
                  </div>
                  <div>
                    •
                  </div>
                  <div>
                    Project Management
                  </div>
                  <div>
                    •
                  </div>
                  <div>
                    Network Design
                  </div>
                  <div>
                    •
                  </div>
                  <div>
                    Communication and Teamwork
                  </div>
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
