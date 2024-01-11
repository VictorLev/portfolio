import { IconMail, IconMapSearch } from "@tabler/icons-react";
import Container from "../ui/container";

const Contact = () => {
  return (
    <div className="bg-white py-24">
      <Container>
      <div className="w-full px-12 justify-center items-center gap-8">
          <div className="flex flex-col">
            <div className="font-bold text-[#C05850] text-2xl border-b-2 border-[#505668]">
              CONTACT
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-[#3a353F]">
              Don&apos;t be shy! Reach out! 👇
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
          <div className="flex flex-wrap gap-8 mt-12">
            <div className="flex w-[5rem] h-[5rem] text-[#3a353F] justify-center items-center rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <IconMapSearch size={50}/>
            </div>
            <div className="flex flex-col pr-12">
              <div className="font-bold text-xl text-[#3a353F]">Location</div>
              <div className="font-medium text-md text-[#797b82] ">Melbourne CBD, VIC</div>
            </div>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
            <div className="flex w-[5rem] h-[5rem] text-[#3a353F] justify-center items-center rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <IconMail size={50}/>
              </div>
              <div className="flex flex-col ">
                <div className="font-bold text-xl text-[#3a353F]">Mail</div>
                <a className="font-medium text-md text-[#797b82] hover:text-[#e89e99] transition-all" href="mailto:levesque.vic@gmail.com">levesque.vic@gmail.com</a>
              </div>
          </div></div>



        </div>
      </Container>
    </div>
  );
}

export default Contact;
