import ProfileImage from "./profile-image";
import Container from "./ui/container";

const Welcome = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="relative flex align-center h-screen justify-center items-center">
          <div className="relative flex gap-x-48 h-[65rem] justify-center items-center">
            <div className="relative flex flex-col max-w-xl">
              <div className="block text-[#2d2e32] font-semibold text-6xl my-8 leading-tight">
                Software engineer
              </div>
              <div className="px-4 text-lg text-[#797b82] font-medium">
                Hi, I&apos;m Victor. Electrical Engineer by training and Software Engineer by passion. based in Melbourne 🇦🇺
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
