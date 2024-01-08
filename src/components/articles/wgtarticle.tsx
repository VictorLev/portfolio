import Image from "next/image";
import Container from "../ui/container";
import tutcr from '@/../public/tutcr.webp'



const WgtArticle = () => {
  return (
    <div className=" py-10 bg-white">
      <Container>
        <div className="flex flex-col w-full">
          <div className="font-bold text-[#C05850] border-b-2 border-[#505668]">
            West Gate Tunnel Project
          </div>
          <div className="flex flex-row p-6 gap-8 items-center">
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden">
              <Image
                src={tutcr}
                alt="traffic control room"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-sm text-[#797b82] text-justify pr-2 font-medium w-1/2" >
              During my tenure at SICE for the West Gate Tunnel (WGT) project, I played a pivotal role in
              the successful execution of various tasks related to intelligent transport systems (ITS).
              My primary responsibility involved the design of comprehensive ITS solutions, including public
              address systems, telephone networks, and closed-circuit television (CCTV) setups. This required a
              deep understanding of the project requirements and a keen eye for integrating cutting-edge technologies
              into the system.
            </div>
          </div>
          <div className="px-6 text-sm text-[#797b82] text-justify pr-2 font-medium w-full" >
            In addition to design responsibilities, I took charge of preparing detailed drawings and technical
            specifications for the installation and configuration of IT devices. This task involved translating conceptual designs
            into actionable plans, ensuring seamless implementation and adherence to project standards.
            <br/><br/>
            To enhance the efficiency of hardware testing, I contributed to the development of automated test
            procedures. Leveraging Selenium Webdriver and Python, I created robust testing protocols that not
            only expedited the testing process but also ensured the reliability and functionality of the hardware components.
          </div>
          <div className="flex flex-row p-6 gap-8 items-center">
            <div className="text-sm text-[#797b82] text-justify pr-2 font-medium w-1/2" >
              Effective communication and collaboration were integral aspects of my role,
              as I regularly coordinated with clients and stakeholders. This involved confirming project
              requirements and details, aligning expectations, and addressing any concerns to guarantee a
              smooth and successful project delivery.
            <br/><br/>
              Overall, my experience at SICE on the WGT tunnel project showcased my expertise in ITS design,
              technical documentation, automation, and effective stakeholder communication, contributing significantly to the
              project&apos;s success.
            </div>
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden">
              <Image
                src={tutcr}
                alt="traffic control room"
                layout="fill"
                objectFit="cover"
              />
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default WgtArticle;
