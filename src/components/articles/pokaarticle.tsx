import Image from "next/image";
import Container from "@/components/ui/container";
import poka from '@/public/poka.jpeg'



const PokaArticle = () => {
  return (
    <div className=" py-10 bg-white">
      <Container>
        <div className="flex flex-col w-full">
          <div className="font-bold text-[#C05850] border-b-2 border-[#505668]">
            Intergration with Poka
          </div>
          <div className="flex flex-row p-6 gap-8 items-center">
            <div className="text-sm text-[#797b82] text-justify font-medium w-1/2" >
              During my tenure as a Solutions Engineer at Poka, I played a key role in leveraging technical
              expertise to support multidisciplinary teams in the development of implementation projects and
              sales pitches. This involved providing guidance on intricate technical aspects, ensuring alignment
              with project goals and client requirements.
              <br/><br/>
              Collaborating closely with Product Managers, I engaged in researching new technologies to create
              prototypes and proof of concept work. This proactive approach not only kept our team abreast of the
              latest industry trends but also facilitated the integration of innovative solutions into our offerings,
              enhancing the overall competitiveness of our projects.
            </div>
            <div className="relative w-1/2 h-auto aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={poka}
                alt="traffic control room"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
          <div className="px-6 text-sm text-[#797b82] text-justify font-medium w-full" >
            In partnership with Professional Services, I contributed to the implementation and deployment of software solutions.
            My focus on an industrial client-centric approach ensured that our implementations were not only technically sound
            but also aligned with the specific needs and challenges of our clients.
            <br/><br/>
            As part of my technical responsibilities, I programmed integrations using Node.js, Python, and Microsoft PowerPlatform,
            working seamlessly with various ERP systems. This required a strong command of these programming languages and a deep
            understanding of ERP systems, enabling the successful integration of our software solutions with diverse client environments.
            <br/><br/>
            In summary, my role at Poka as a Solutions Engineer showcased my ability to provide technical leadership, collaborate
            on innovative solutions, ensure client-focused project implementations, and proficiently program integrations, contributing
            significantly to the success of both project deployments and sales efforts.
          </div>

        </div>
      </Container>
    </div>
  );
}

export default PokaArticle;
