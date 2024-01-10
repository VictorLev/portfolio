import Image from "next/image";
import Container from "@/components/ui/container";
import laptop from '@/public/laptop.jpg'



const About = () => {
  return (
    <div className=" py-20 bg-white">
      <Container>
        <div className="px-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8">
          <div className="relative m-auto w-full max-w-[425px] aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={laptop}
              alt="Picture of laptop"
              fill
              style={{objectFit: "cover"}}
              sizes="(max-width:768px) 100vw , 700px"
            />

          </div>
          <div className="flex flex-col max-w-[475px] lg:max-w-fit ">
            <div className="font-bold text-[#C05850] border-b-2 border-[#505668]">
              ABOUT ME
            </div>
            <div className="font-bold text-lg py-2 text-[#3a353F]">
              A committed software engineer, driven by a love for coding and problem-solving
            </div>
            <div className="text-sm text-[#797b82] text-justify pr-2 font-medium">
            As a seasoned engineer in various industries, I bring a versatile skill set. In web development, I excel in creating user-centric websites, proficiently utilizing frameworks like React and Nextjs.
            My expertise extends to electronic engineering and telecommunications, where I have designed and implemented robust and scalable industrial systems.
            With a keen eye for detail and a structured approach, I have successfully managed projects from conception to completion, showcasing my project management prowess. Moreover, my strong communication skills and collaborative mindset have fostered positive teamwork dynamics.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
