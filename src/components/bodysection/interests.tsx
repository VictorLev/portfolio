
import Container from "@/components/ui/container";
import Image from "next/image";
import worldmap from "@/public/worldmap.png";

import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'



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
              PERSONAL INTERESTS
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-[#3a353F]">
              Life changing experiences that I&apos;m proud to share
            </div>
          </div>
          <div className="relative w-full h-auto">
            <Image
              src={worldmap}
              alt="worldmap"
            />
            <div className="absolute top-1/4 left-1/4 w-[15%] h-auto aspect-[1/1]">
              <div className="relative w-full h-full bg-[#C05850] rounded-full">
                <div className="absolute m-auto inset-0 w-5/6 h-5/6 bg-cover bg-center bg-[url('../public/canoe.jpeg')] rounded-full"
                >
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-[45%] w-[15%] h-auto aspect-[1/1]">
              <div className="relative w-full h-full bg-[#C05850] rounded-full">
                <div className="absolute m-auto inset-0 w-5/6 h-5/6 bg-cover bg-center bg-[url('../public/ghana.png')] rounded-full">
                </div>
              </div>
            </div>
            <div className="absolute top-1/4 left-[75%] w-[15%] h-auto aspect-[1/1]">
              <div className="relative w-full h-full bg-[#C05850] rounded-full">
                <div className="absolute m-auto inset-0 w-5/6 h-5/6 bg-cover bg-center bg-[url('../public/korea.jpeg')]  rounded-full">
                </div>
              </div>
            </div>
            <div className="absolute top-2/3 left-[80%] w-[15%] h-auto aspect-[1/1]">
              <div className="relative w-full h-full bg-[#C05850] rounded-full">
                <div className="absolute m-auto inset-0 w-5/6 h-5/6 bg-cover bg-center bg-[url('../public/melbourne.jpeg')]  rounded-full">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interests;
