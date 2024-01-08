
import Container from "../ui/container";


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
        </div>
      </Container>
    </div>
  );
}

export default Interests;
