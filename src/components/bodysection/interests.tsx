
import Container from "@/components/ui/container";
import Image from "next/image";
import worldmap from "@/public/worldmap.png";

import { useState } from 'react'
import PopoveBox from "../ui/popover";
import About from "./about";
import { IconBooks, IconChess, IconRun, IconTrekking, IconUfo } from "@tabler/icons-react";



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
            <div className="relative w-full h-auto">
              <Image
                src={worldmap}
                alt="worldmap"
              />
              <div className="absolute top-1/4 left-1/4 w-[15%] h-auto aspect-[1/1]">
                <PopoveBox image={"bg-canoe"}>
                  <div className="absolute -right-[41rem] -top-[10rem] bg-white h-[26rem] w-[40rem] rounded-lg"
                  >
                    <div className="m-4">
                      <div className="font-bold text-[#3a353F] text-2xl border-b-2 border-[#505668]">
                        Broadback River Expedition
                      </div>
                      <div className="font-bold text-xl pt-2 pb-4 text-[#3a353F]">
                        450 km, 40 Days of canoe adventure
                      </div>
                      <div className="flex flex-row px-6 gap-8 items-center">
                        <div className="relative w-1/2 h-auto aspect-[4/3] bg-cover bg-[url('../public/Broadback.png')] bg-center rounded overflow-hidden">
                        </div>
                        <div className="text-sm text-[#797b82] text-justify font-medium w-3/4" >
                          A 40-day canoe camping adventure on the Broadback River promised an immersive and challenging experience in the heart of nature.The daily routine involved cooking meals over open fires, purifying water from the river, and enjoying the simplicity of life in the wild. Nights were spent under the stars, surrounded by the soothing sounds of nature.
                        </div>
                      </div>
                      <div className="my-4 px-6 text-sm text-[#797b82] text-justify font-medium " >
                      The adventure was not without its challenges; the crew encountered harsh weather conditions, varying river currents, and wildlife encounters. However, these obstacles contribute to the overall sense of accomplishment and connection with the natural environment.
                      </div>
                    </div>
                  </div>
                </PopoveBox>
              </div>
              <div className="absolute top-1/2 left-[40%] w-[15%] h-auto aspect-[1/1]">
                <PopoveBox image={"bg-ghana"}>
                  <div className="absolute -right-[31rem] -top-[10rem] bg-white h-[31rem] w-[30rem] rounded-lg"
                  >
                  <div className="m-4">
                    <div className="font-bold text-[#3a353F] text-2xl border-b-2 border-[#505668]">
                      Volunteering in Ghana
                    </div>
                    <div className="font-bold text-xl pt-2 pb-4 text-[#3a353F]">
                      Teaching essential IT and computer skills to children in Cape coast, Ghana.
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <iframe width="400" height="230" src="https://www.youtube.com/embed/w_uxyCgd-vM?si=jHyme3aRWAvZO-_W" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                      <div className="my-4 px-6 text-sm text-[#797b82] text-justify font-medium " >
                        Just like children throughout the world, Ghanaian children are fascinated by computers and eager to learn how to use them. Teaching such a useful skill is invaluable, both to individuals and the communities they live in.
                      </div>
                    </div>
                  </div>

                  </div>
                </PopoveBox>
              </div>
              <div className="absolute top-1/4 left-[75%] w-[15%] h-auto aspect-[1/1]">
                <PopoveBox image={"bg-korea"}>
                  <div className="absolute -left-[41rem] -top-[10rem] bg-white h-[30rem] w-[40rem] rounded-lg"
                  >
                    <div className="m-4">
                      <div className="font-bold text-[#3a353F] text-2xl border-b-2 border-[#505668]">
                        Student Exchange in South Korea
                      </div>
                      <div className="font-bold text-xl pt-2 pb-4 text-[#3a353F]">
                        living in a rich culture
                      </div>
                      <div className="flex flex-row px-6 gap-8 items-center">
                        <div className="text-sm text-[#797b82] text-justify font-medium w-3/4" >
                        My 8-month student exchange in Korea was nothing short of amazing – a whirlwind of adventure, cultural immersion, and personal growth. From the moment I set foot in the country, I was captivated by the vibrant energy and warmth of the Korean people.
                        </div>
                        <div className="relative w-1/2 h-auto aspect-[4/3] bg-cover bg-[url('../public/koreafriends.jpeg')] bg-center rounded overflow-hidden">
                        </div>
                      </div>
                      <div className="my-4 px-6 text-sm text-[#797b82] text-justify font-medium " >
                      The academic side of the exchange was an eye-opener. I got to experience firsthand the Korean education system, and it was fascinating to see the different teaching methods and approaches. It challenged me academically, broadening my horizons and providing me with a unique perspective on my field of study.
                      <br/>
                      I explored ancient palaces and temples, savored authentic Korean cuisine, and even participated in traditional tea ceremonies. The language barrier initially posed a challenge, but as I navigated daily life, my language skills improved, opening up even more doors to connect with the local community.
                      </div>
                    </div>
                  </div>
                </PopoveBox>
              </div>
              <div className="absolute top-2/3 left-[80%] w-[15%] h-auto aspect-[1/1]">
                <PopoveBox image={"bg-melbourne"}>
                  <div className="absolute -left-[41rem] -top-[20rem] bg-white h-[32rem] w-[40rem] rounded-lg"
                  >
                    <div className="m-4">
                      <div className="font-bold text-[#3a353F] text-2xl border-b-2 border-[#505668]">
                        Moving from Canada to Melbourne
                      </div>
                      <div className="font-bold text-xl pt-2 pb-2 text-[#3a353F]">
                        the major life shift
                      </div>
                      <div className="px-6 text-sm text-[#797b82] text-justify font-medium " >
                        Moving from Montreal to Melbourne was an event that brought a whirlwind of emotions and experiences. The decision to relocate to the other side of the globe wasn&apos;t made lightly, but from the moment I stepped onto that plane, I knew I was embarking on a thrilling adventure.
                        The first thing that struck me was the sheer distance. The long-haul flight felt like a journey through time zones, cultures, and climates.
                        <br/><br/>
                        Settling into Melbourne wasn&apos;t just about adapting to a different city – it was about acclimating to an entirely new way of life. The Aussie culture, with its laid-back vibe and friendliness, quickly made me feel welcome.
                        Of course, there were challenges. Navigating the nuances of Aussie slang, understanding the public transportation system, and adjusting to the reversed seasons were all part of the learning curve. Yet, each challenge was an opportunity for growth and a chance to embrace the unfamiliar.
                        <br/><br/>
                        One of the most memorable aspects was meeting people from all walks of life. Australians, with their easygoing nature, made it easy to strike up conversations and build connections. The friendships formed, whether with fellow expats or locals, became the support network that made Melbourne truly feel like home.
                      </div>
                    </div>
                  </div>
                </PopoveBox>
              </div>
            </div>
            <div className="font-bold text-[#C05850] text-right text-2xl border-b-2 border-[#505668]">
              HOBBIES
            </div>
            <div className="font-bold text-2xl pt-2 pb-8 text-right text-[#3a353F]">
              what i do for enjoyment
            </div>
            <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <li className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-row items-center justify-center text-[#3a353F]">
                  <div className="flex flex-col w-3/4">
                    <h3 className="text-xl font-semibold mb-4 text-[#3a353F]">Hiking/Rock Climbing</h3>
                    <p>Exploring nature&apos;s wonders and reaching new heights.</p>
                  </div>
                  <IconTrekking size={100} />
                </div>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-row items-center justify-center text-[#3a353F]">
                  <div className="flex flex-col w-3/4">
                    <div className="text-xl font-semibold mb-4 text-[#3a353F]">Running/Biking</div>
                    <div>Staying active and enjoying the thrill of speed.</div>
                  </div>
                  <IconRun size={100} />
                </div>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-row items-center justify-center text-[#3a353F]">
                  <div className="flex flex-col w-3/4">
                    <div className="text-xl font-semibold mb-4 text-[#3a353F]">Learning</div>
                    <div>Engaging in the mental challenges of Chess, the beauty of the Spanish language, and the joy of solving puzzles.</div>
                  </div>
                  <IconChess size={100}/>
                </div>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-row items-center justify-center text-[#3a353F]">
                  <div className="flex flex-col w-3/4">
                    <div className="text-xl font-semibold mb-4 text-[#3a353F]">Sci-Fi Movies</div>
                    <div>Exploring futuristic worlds and mind-bending concepts through the lens of science fiction.</div>
                  </div>
                  <IconUfo size={100}/>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interests;
