import ProfileImage from "./profile-image";
import Container from "./ui/container";

const Welcome = () => {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="relative flex align-center h-screen justify-center items-center">
          <div className="relative flex gap-x-56 justify-center items-center">
            <div>
              Victor Levesque
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
