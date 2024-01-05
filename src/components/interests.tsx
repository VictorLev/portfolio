import Image from "next/image";
import Container from "./ui/container";
import { IconBrandGithub,IconBrandNextjs,IconBrandPrisma,IconExternalLink } from '@tabler/icons-react';

interface InterestsProps {
  id: string;
}

const Interests = ({id}:InterestsProps) => {
  return (
    <div id={id} className=" py-24 ">
      <Container>
        <div className="w-full px-12 justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="font-bold text-[#C05850] text-2xl border-b-2 border-[#505668]">
              Personal Interests
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-[#3a353F]">
              Each project is a unique piece of development
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interests;
