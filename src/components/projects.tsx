import Image from "next/image";
import Container from "./ui/container";
import qcstore from "../../public/qcecomm-store.jpg"
import { IconBrandGithub,IconBrandNextjs,IconBrandPrisma } from '@tabler/icons-react';

const Projects = () => {
  return (
    <section id="projects" className=" py-24">
      <Container>
        <div className="w-full px-12 justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="font-bold text-[#C05850] border-b-2 border-[#505668]">
              PORTFOLIO
            </div>
            <div className="font-bold text-2xl py-8 text-[#3a353F]">
              Each project is a unique piece of development
            </div>
            <div className="grid grid-cols-1 gap-20 w-full ">
              <div className="flex flex-row p-6 h-[25rem] gap-20 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-b from-white to-[#f1e7de] ">
                <div className="overflow-hidden rounded-2xl shadow-lg w-7/12 h-full transition duration-[2000ms] hover:translate-y-[-53%]" >
                  <a target="_blank" href="https://qcecomm-store.vercel.app/en" rel="noreferrer">
                      <Image
                        src={qcstore}
                        alt="website"

                      />
                  </a>
                </div>
                <div className="flex flex-col h-full justify-center items-center w-[18rem]">
                  <div className="font-bold text-lg text-[#3a353F] mb-4">E-commerce (Decembre 2023)</div>
                  <div className="text-[#797b82] font-medium text-center mb-2">A seamless online shopping experience for customers Quebecers in Australia offering a wide range of products. The full-stack website supports multiple languages, a shopping cart, Stripe and more.</div>
                  <div className="flex flex-row gap-2 justify-center">
                    <IconBrandNextjs color="#3a353F" size={36}/>
                    <IconBrandPrisma color="#3a353F" size={36}/>
                  </div>
                  <div className="flex justify-evenly">
                    <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">
                      Code
                    </a>
                    <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
