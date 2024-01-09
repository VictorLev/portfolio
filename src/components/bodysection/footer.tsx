import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Container from "../ui/container";




const Footer = () => {
  return (
  <div className="bg-[#3a353F] w-full p-12">
    <Container>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="text-white font-bold">
          Copyright © 2024. All rights are reserved
        </div>
        <div className="flex mx-4 my-8 gap-4">
          <a className="text-white hover:text-[#e89e99] transition-all" href="https://www.linkedin.com/in/victor-l%C3%A9vesque-p-eng/" target="_blank" rel="noreferrer noopener">
            <IconBrandLinkedin size={36}/>
          </a>
          <a className="text-white hover:text-[#e89e99] transition-all" href="https://github.com/VictorLev" target="_blank" rel="noreferrer noopener">
            <IconBrandGithub size={36}/>
          </a>
        </div>
      </div>
    </Container>
  </div>

   );
}

export default Footer;
