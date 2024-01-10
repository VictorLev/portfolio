import Image from "next/image";
import Container from "@/components/ui/container";
import hatch from '@/public/hatch.png'



const HArticle = () => {
  return (
    <div className=" py-10 bg-white">
      <Container>
        <div className="flex flex-col w-full">
          <div className="font-bold text-[#C05850] border-b-2 border-[#505668]">
            Pea Protein Plant Project
          </div>
          <div className="flex flex-col lg:flex-row py-4 sm:p-6 gap-8 items-center">
            <div className="relative h-[13rem] w-full lg:w-1/2 lg:h-full overflow-hidden rounded-2xl">
              <Image
                src={hatch}
                alt="traffic control room"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="text-sm text-[#797b82] text-justify font-medium lg:w-3/4" >
              During my tenure as an Electrical Engineer at Hatch, specifically on the Pea Protein Plant project,
              I played a crucial role in contributing to the successful implementation of large-scale industrial
              Networking and IT System installations. Working closely with senior engineers, I provided valuable assistance
              in ensuring the seamless integration and functionality of these complex systems within the plant.
              <br/><br/>
              A significant aspect of my responsibilities involved the meticulous redaction of detailed technical
              specifications and drawings for network and device installations. This task required a keen attention to
              detail and a deep understanding of industrial processes, ensuring that the documentation was precise and
              aligned with the project&apos;s requirements and industry standards.
            </div>
          </div>
          <div className="sm:px-6 text-sm text-[#797b82] text-justify font-medium w-full" >
          Effective communication and collaboration were key components of my role, as I consistently coordinated with
          clients and stakeholders. This involved confirming project requirements and details, addressing any concerns,
          and ensuring that the implemented systems met the expectations of all stakeholders. This proactive coordination
          was essential in maintaining alignment between project deliverables and client expectations.
          <br/><br/>
          In summary, my work experience at Hatch on the Pea Protein Plant project highlighted my contributions in assisting
          with large-scale industrial networking systems, my proficiency in creating detailed technical specifications
          and drawings, and my ability to effectively coordinate with clients and stakeholders to ensure successful project outcomes.
          </div>

        </div>
      </Container>
    </div>
  );
}

export default HArticle;
