import Image from "next/image";
import Container from "@/components/ui/container";
import wgtunnel from "@/public/westgatetunnel.webp"
import pokaint from "@/public/Integrations-Logos.webp"
import ppplant from "@/public/ppplant.webp"
import { IconBrandGithub,IconBrandNextjs,IconBrandPrisma,IconExternalLink } from '@tabler/icons-react';
import { MouseEventHandler } from "react";
import useViewArticle from "@/hooks/view-article";
import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { Fragment } from 'react'
import About from "@/components/bodysection/about";
import WgtArticle from "@/components/articles/wgtarticle";
import PokaArticle from "../articles/pokaarticle";
import HArticle from "../articles/hatcharticle";

interface ExperienceProps {
  id: string;
}

const Experience = ({id}:ExperienceProps) => {

  const viewArticle = useViewArticle()

  const handleStatus = (event: MouseEventHandler<HTMLDivElement>, article: React.ReactNode) => {
    event
    viewArticle.onOpen(article)
  }

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
  }


  return (
    <div id={id} className=" py-24 bg-white">
      <Container>
        <div className="w-full justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="mx-12">
              <div className="font-bold text-[#C05850] text-2xl border-b-2 border-[#505668] text-right">
                PROFESSIONAL EXPERIENCE
              </div>
              <div className="font-bold sm:text-2xl pt-2 pb-8 text-[#3a353F] text-right">
                Impactful contributions in large-scale engineering project
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:divide-x-[1px]">
              { /* -- WGT project --*/ }
              <div className="flex flex-col px-6 overflow-hidden ">
                <div className="relative overflow-hidden rounded h-[13rem]" >
                  <Image
                    src={wgtunnel}
                    alt="website"
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg text-[#3a353F] mt-2">West Gate Tunnel</div>
                  <div className="text-[#797b82] font-medium text-justify my-2">
                  As part of the Intelligent Transport Systems team, I played a role in designing, configuring, and testing the radio, public address, operator and emergency telephone systems.
                  </div>
                  <div className="flex flex-row  my-2">
                    <div className="cursor-pointer text-[#3a353F] font-semibold underline-offset-4 transition-all decoration-[#C05850] hover:underline" onClick={(event) => handleStatus(onPreview, <WgtArticle/>)}>
                      Read more
                    </div>
                  </div>
                </div>
              </div>
              { /* -- Poka Integration --*/ }
              <div className="flex flex-col px-6 overflow-hidden ">
                <div className="relative overflow-hidden rounded h-[13rem]" >
                  <Image
                    src={pokaint}
                    alt="website"
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg text-[#3a353F] mt-2">Intergration with Poka</div>
                  <div className="text-[#797b82] font-medium text-justify my-2">
                    Being the only Solutions engineer in fast growing startup, I lead integration projects between Poka, a connect worker application, and various 3rd parties like SAP, PowerBI, Upkeep and more.
                  </div>
                  <div className="flex flex-row  my-2">
                  <div className="cursor-pointer text-[#3a353F] font-semibold underline-offset-4 transition-all decoration-[#C05850] hover:underline" onClick={(event) => handleStatus(onPreview, <PokaArticle />)}>
                      Read more
                    </div>
                  </div>
                </div>
              </div>
              { /* -- Portage Laprairie --*/ }
              <div className="flex flex-col px-6 overflow-hidden ">
                <div className="relative overflow-hidden rounded h-[13rem]" >
                  <Image
                    src={ppplant}
                    alt="website"
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg text-[#3a353F] mt-2">World&apos;s largest pea protein plant</div>
                  <div className="text-[#797b82] font-medium text-justify my-2">
                  Participating in the design of an extensive, robust network infrastructure, I coordinated with clients and stakeholders to confirm project requirements and redacted detailed technical specifications and drawings for network and device installation.
                  </div>
                  <div className="flex flex-row  my-2">
                    <div className="cursor-pointer text-[#3a353F] font-semibold underline-offset-4 transition-all decoration-[#C05850] hover:underline" onClick={(event) => handleStatus(onPreview, <HArticle/>)}>
                      Read more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

  </div>
   );
}

export default Experience;
