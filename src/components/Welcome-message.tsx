import ProfileImage from "./profile-image";
import Container from "./ui/container";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white h-screen">
      <Container>
        <div className="relative flex h-[40rem] align-center justify-center items-center">
          <div className="relative flex gap-x-4 justify-center items-center">
            <div className="relative flex flex-col max-w-4xl gap-y-6">
              <div className="block text-[#231625ff] font-bold text-6xl my-8 leading-tight">
                Software engineer
              </div>
              <div className="px-4 text-lg text-[#797b82] font-medium">
                Hi, I&apos;m Victor. Electrical Engineer by training and Software Engineer by passion, based in Melbourne 🇦🇺
              </div>
            </div>
            <div>
              <ProfileImage/>
            </div>
          </div>

        </div>
      </Container>
    </div>
     );
}



export default Welcome;
