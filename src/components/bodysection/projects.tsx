import Image from "next/image";
import Container from "@/components/ui/container";
import qcstore from "@/public/qcecomm-store.jpg"
import AllDayHikers from "@/public/all-day-hikers.jpg"
import wip from "@/public/WIP.jpeg"
import tripquest from "@/public/tripquest.png"
import AdminPanel from "@/public/AdminPanel.gif"
import { IconBrandGithub,IconBrandNextjs,IconBrandPrisma,IconExternalLink,
  IconBrandTailwind, IconBrandReact, IconDiamond } from '@tabler/icons-react';

interface ProjectsProps {
  id: string;
}

const Projects = ({id}:ProjectsProps) => {
  return (
    <div id={id} className=" py-24 ">
      <Container>
        <div className="w-full justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="font-bold text-[#C05850] text-2xl border-b-2 border-[#505668]">
              PORTFOLIO PROJECTS
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-[#3a353F]">
              Each project is a unique piece of development
            </div>
            { /* -- PORTFOLIO PROJECTS --*/ }
            <div className="grid grid-cols-1 gap-20 w-full h-auto">
            { /* -- TripQuest--*/ }
            <div className="flex flex-col p-6 mx-auto gap-8 h-[45rem] w-fit lg:flex-row-reverse lg:gap-16 lg:h-[25rem] lg:w-full overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="w-full sm:w-[34rem] h-auto overflow-hidden rounded-2xl shadow-lg" >
                <a target="_blank" href="https://young-caverns-55583-914b182a4d8b.herokuapp.com/" rel="noreferrer">
                    <Image
                      src={tripquest}
                      alt="website"
                      width={544}
                    />
                </a>
              </div>
              <div className="flex flex-col h-auto items-center justify-center mx-auto w-[18rem]">
                <div className="font-bold text-lg text-[#3a353F] mb-4">TripQuest (March 2024)</div>
                <div className="text-[#797b82] font-medium text-center mb-2">Full-stack web development project. A clean, intuitive design that displays a dashboard of the user’s driving statistics, rewards, and tips for safer driving.

                 </div>
                <div className="flex flex-row gap-4 justify-center">
                  <div className="flex flex-row p-2 items-center">
                    <div className="font-semibold text-[#3a353F]">Ruby</div>
                    <IconDiamond color="#3a353F" size={24}/>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4 p-2 items-center">
                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://github.com/VictorLev/trip-quest" rel="noreferrer">
                      <div className="flex flex-row items-center rounded bg-white shadow p-1">
                        <div className="font-semibold px-1">
                          Code
                        </div>
                        <IconBrandGithub size={36}/>
                      </div>
                    </a>
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://young-caverns-55583-914b182a4d8b.herokuapp.com/" rel="noreferrer">
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
            { /* -- AllDayHikers--*/ }
            <div className="flex flex-col p-6 mx-auto gap-8 h-[45rem] w-fit lg:flex-row lg:gap-16 lg:h-[26rem] lg:w-full overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="w-full sm:w-[34rem] h-auto overflow-hidden rounded-2xl shadow-lg" >
                <a target="_blank" href="https://all-day-hikers.vercel.app/" rel="noreferrer">
                    <Image
                      src={AllDayHikers}
                      alt="website"
                      width={544}
                      className="transition duration-[10000ms] hover:translate-y-[-70%]"
                    />
                </a>
              </div>
              <div className="flex flex-col h-auto items-center justify-center mx-auto w-[18rem]">
                <div className="font-bold text-lg text-[#3a353F] mb-4">AllDayHikers (February 2024)</div>
                <div className="text-[#797b82] font-medium text-center mb-2">A nature e-commerce front-end project. This project showcases my front-end creativity with tailwindCSS to make it modern and realistic.</div>
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
                <div className="flex justify-between w-full mt-4 p-2 items-center">
                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://github.com/VictorLev/AllDayHikers" rel="noreferrer">
                      <div className="flex flex-row items-center rounded bg-white shadow p-1">
                        <div className="font-semibold px-1">
                          Code
                        </div>
                        <IconBrandGithub size={36}/>
                      </div>
                    </a>
                    <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://all-day-hikers.vercel.app/" rel="noreferrer">
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

            { /* -- AdminPanel/CMS for E-COMM STORE--*/ }
            <div className="flex flex-col p-6 mx-auto gap-8 h-[45rem] w-fit lg:flex-row-reverse lg:gap-16 lg:h-[25rem] lg:w-full overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative w-full sm:w-[34rem] sm:h-full lg:h-auto overflow-hidden rounded-2xl shadow-lg" >
                <a target="_blank" href="https://qcecomm-admin.vercel.app" rel="noreferrer">
                    <Image
                      src={AdminPanel}
                      alt="wip"
                      width={544}
                    />
                </a>
              </div>
              <div className="flex flex-col h-auto items-center justify-center mx-auto w-[18rem]">
                <div className="font-bold text-lg text-[#3a353F] mb-4 text-center">Admin Panel/CMS (Jan 2024)</div>
                <div className="text-[#797b82] font-medium text-center mb-2">Connected to the E-commerce Project, this back-end CMS website manages content, orders, settings, dashboards and other functionalities. This project utilized Clerk for user management, Prisma as MySQL database, and more. </div>

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
                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://github.com/VictorLev/qcecomm-admin" rel="noreferrer">
                      <div className="flex flex-row items-center rounded bg-white shadow p-1">
                        <div className="font-semibold px-1">
                          Code
                        </div>
                        <IconBrandGithub size={36}/>
                      </div>
                    </a>

                  <a className="text-[#3a353F] hover:text-[#e89e99] transition-all" target="_blank" href="https://qcecomm-admin.vercel.app" rel="noreferrer">
                      <div className="flex flex-row items-center rounded bg-white shadow p-1">
                        <div className="font-semibold px-1">
                        Live Demo
                        </div>
                        <IconExternalLink size={36}/>
                      </div>
                    </a>
                </div>
              </div>
            </div>

            { /* -- E-COMM STORE --*/ }
            <div className="flex flex-col p-6 mx-auto gap-8 h-[45rem] w-fit lg:flex-row lg:gap-16 lg:h-[26rem] lg:w-full overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="w-full sm:w-[34rem] h-auto overflow-hidden rounded-2xl shadow-lg" >
                <a target="_blank" href="https://qcecomm-store.vercel.app/en" rel="noreferrer">
                    <Image
                      src={qcstore}
                      alt="website"
                      width={544}
                      className="transition duration-[5000ms] hover:translate-y-[-47%]"
                    />
                </a>
              </div>
              <div className="flex flex-col h-auto items-center justify-center mx-auto w-[18rem]">
                <div className="font-bold text-lg text-[#3a353F] my-4">E-commerce (Decembre 2023)</div>
                <div className="text-[#797b82] font-medium text-center mb-2">A seamless online shopping experience for Quebecer customers in Australia offering a wide range of products. The full-stack website supports multiple languages, a shopping cart, Stripe and more.</div>
                <div className="flex flex-row gap-4 justify-center">
                  <div className="flex flex-row p-2 items-center">
                    <div className="font-semibold text-[#3a353F]">Nextjs</div>
                    <IconBrandNextjs color="#3a353F" size={24}/>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="font-semibold text-[#3a353F]">Tailwind</div>
                    <IconBrandTailwind color="#3a353F" size={24}/>
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

              { /* -- Restaurant Search Engine
              <div className="flex flex-col p-6 mx-auto gap-8 h-[45rem] w-fit lg:flex-row-reverse lg:gap-16 lg:h-[26rem] lg:w-full overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="w-full sm:w-[34rem] h-auto overflow-hidden rounded-2xl shadow-lg" >
                  <a target="_blank" href="" rel="noreferrer">
                      <Image
                        src={wip}
                        alt="wip"
                        width={544}
                      />
                  </a>
                </div>
                <div className="flex flex-col h-auto items-center justify-center mx-auto w-[18rem]">
                  <div className="font-bold text-lg text-[#3a353F] mb-4 text-center">Restaurant Search Engine (Feb 2024)</div>
                  <div className="text-[#797b82] font-medium text-center mb-2">Innovative matchmaking Restaurant Search Engine to make perfect pairings! Elevate your dining experience by discovering restaurants tailored to your unique preferences and cravings. </div>

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

                </div>

              </div> --*/ }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
