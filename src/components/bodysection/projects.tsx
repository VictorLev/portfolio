import Image from "next/image";
import Container from "@/components/ui/container";
import qcstore from "@/public/qcecomm-store.jpg"
import portfolio from "@/public/portfolio.png"
import wip from "@/public/WIP.jpeg"
import { IconBrandGithub,IconBrandNextjs,IconBrandPrisma,IconExternalLink,
  IconBrandTailwind, IconBrandReact } from '@tabler/icons-react';

interface ProjectsProps {
  id: string;
}

const Projects = ({id}:ProjectsProps) => {
  return (
    <div id={id} className=" py-24 ">
      <Container>
        <div className="w-full px-12 justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="font-bold text-[#C05850] text-2xl border-b-2 border-[#505668]">
              PORTFOLIO PROJECTS
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-[#3a353F]">
              Each project is a unique piece of development
            </div>
            { /* -- PORTFOLIO PROJECTS --*/ }
            <div className="grid grid-cols-1 gap-20 w-full ">
              { /* -- E-COMM STORE --*/ }
              <div className="flex flex-row p-6 h-[25rem] gap-20 overflow-hidden rounded-2xl shadow-lg bg-white ">
                <div className="overflow-hidden rounded-2xl shadow-lg h-full " >
                  <a target="_blank" href="https://qcecomm-store.vercel.app/en" rel="noreferrer">
                      <Image
                        src={qcstore}
                        alt="website"
                        width={500}
                        className="transition duration-[5000ms] hover:translate-y-[-50%]"
                      />
                  </a>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-[18rem]">
                  <div className="font-bold text-lg text-[#3a353F] mb-4">E-commerce (Decembre 2023)</div>
                  <div className="text-[#797b82] font-medium text-center mb-2">A seamless online shopping experience for Quebecer customers in Australia offering a wide range of products. The full-stack website supports multiple languages, a shopping cart, Stripe and more.</div>
                  <div className="flex flex-row gap-4 justify-center">
                    <div className="flex flex-row p-2 items-center">
                      <div className="font-semibold text-[#3a353F]">Nextjs</div>
                      <IconBrandNextjs color="#3a353F" size={24}/>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="font-semibold text-[#3a353F]">Prisma</div>
                      <IconBrandPrisma color="#3a353F" size={24}/>
                    </div>
                  </div>
                  <div className="flex justify-between w-full mt-4 p-2 items-center">
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://github.com/VictorLev/qcecomm-store" rel="noreferrer">
                        <div className="flex flex-row items-center rounded bg-white shadow p-1">
                          <div className="font-semibold px-1">
                            Code
                          </div>
                          <IconBrandGithub size={36}/>
                        </div>
                      </a>

                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://qcecomm-store.vercel.app/en" rel="noreferrer">
                        <div className="flex flex-row items-center rounded bg-white shadow p-1">
                          <div className="font-semibold px-1">
                          Live Demo
                          </div>
                          <IconExternalLink  size={36}/>
                        </div>
                      </a>
                  </div>
                </div>
              </div>
              { /* -- Portfolio --*/ }
              <div className="flex flex-row-reverse p-6 h-[25rem] gap-20 overflow-hidden rounded-2xl shadow-lg bg-white ">
                <div className="overflow-hidden rounded-2xl shadow-lg h-full " >
                  <a target="_blank" href="https://qcecomm-store.vercel.app/en" rel="noreferrer">
                      <Image
                        src={portfolio}
                        alt="website"
                        width={500}
                        className="transition duration-[5000ms] hover:translate-y-[-50%]"
                      />
                  </a>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-[18rem]">
                  <div className="font-bold text-lg text-[#3a353F] mb-4">Portfolio (January 2023)</div>
                  <div className="text-[#797b82] font-medium text-center mb-2">This simple yet elegant portfolio showcases my front-end capabilities with modern technologies and a focus on clarity, responsiveness and clean design.</div>
                  <div className="flex flex-row gap-4 justify-center">
                    <div className="flex flex-row p-2 items-center">
                      <div className="font-semibold text-[#3a353F]">Tailwind</div>
                      <IconBrandTailwind color="#3a353F" size={24}/>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="font-semibold text-[#3a353F]">React</div>
                      <IconBrandReact color="#3a353F" size={24}/>
                    </div>
                  </div>
                  <div className="flex justify-center w-full mt-4 p-2 items-center">
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://github.com/VictorLev/portfolio" rel="noreferrer">
                        <div className="flex flex-row items-center rounded bg-white shadow p-1">
                          <div className="font-semibold px-1">
                            Code
                          </div>
                          <IconBrandGithub size={36}/>
                        </div>
                      </a>
                  </div>
                </div>

              </div>
              { /* -- Restaurant Search Engine --*/ }
              <div className="flex flex-row p-6 h-[25rem] gap-20 overflow-hidden rounded-2xl shadow-lg bg-white ">
                <div className="relative overflow-hidden rounded-2xl shadow-lg w-1/2 h-full" >
                  <a target="_blank" href="" rel="noreferrer">
                      <Image
                        src={wip}
                        alt="wip"
                        fill
                        style={{objectFit: "cover"}}
                      />
                  </a>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-[18rem]">
                  <div className="font-bold text-lg text-[#3a353F] mb-4 text-center">Restaurant Search Engine (Feb 2024)</div>
                  <div className="text-[#797b82] font-medium text-center mb-2">Innovative matchmaking Restaurant Search Engine to make perfect pairings! Elevate your dining experience by discovering restaurants tailored to your unique preferences and cravings. </div>
                  {/*
                  <div className="flex flex-row gap-4 justify-center">
                    <div className="flex flex-row p-2 items-center">
                      <div className="font-semibold text-[#3a353F]">Nextjs</div>
                      <IconBrandNextjs color="#3a353F" size={24}/>
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="font-semibold text-[#3a353F]">Prisma</div>
                      <IconBrandPrisma color="#3a353F" size={24}/>
                    </div>
                  </div>
                  <div className="flex justify-between w-full mt-4 p-2 items-center">
                    <a target="_blank" href="" rel="noreferrer">
                        <div className="flex flex-row items-center rounded bg-white shadow p-1">
                          <div className="font-semibold text-[#3a353F] px-1">
                            Code
                          </div>
                          <IconBrandGithub color="#3a353F" size={36}/>
                        </div>
                      </a>

                    <a target="_blank" href="" rel="noreferrer">
                        <div className="flex flex-row items-center rounded bg-white shadow p-1">
                          <div className="font-semibold text-[#3a353F] px-1">
                          Live Demo
                          </div>
                          <IconExternalLink color="#3a353F" size={36}/>
                        </div>
                      </a>
                  </div>
                  */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
